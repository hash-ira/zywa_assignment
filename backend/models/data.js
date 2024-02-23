const fs = require('fs');
const csv = require('csv-parser');
const CardStatus = require('./../models/cardStatusModel');
const moment = require('moment');

function importData(filePath, status) {
    fs.createReadStream(filePath)
      .pipe(csv())
        .on('data', async (row) => {
        
        let phoneNumber = '';
        if ('User contact' in row) {
            phoneNumber = row['User contact'].replace(/["]+/g, '');
        } else if ('User Mobile' in row) {
          phoneNumber = row['User Mobile'].replace(/["]+/g, '');
        }
        
        phoneNumber = phoneNumber.slice(-9);
        
        let ID = 'ID'
        if ('ID ' in row) { 
          ID = 'ID '
        }
          
        let lastUpdate;
        if (row.Timestamp.includes('-')) {
          lastUpdate = moment(row.Timestamp, ['YYYY-MM-DDTHH:mm:ssZ', 'DD-MM-YYYY HH:mm' , 'DD-MM-YYYY hh:mm A' , 'DD-MM-YYYY h:mm A']).toDate();
        } else {
          lastUpdate = new Date(row.Timestamp);
        }
            
        const cardStatus = new CardStatus({
          ID: row[ID],  
          userContact: phoneNumber,
          cardId: row['Card ID'],
          status: status,
          lastUpdate: lastUpdate,
          comment: row.Comment || ''
        });
        
        try {
          await cardStatus.save();
          console.log(`Successfully imported data for card with ID ${row['Card ID']}`);
        } catch (err) {
          console.error(`Error importing data for card with ID ${row['Card ID']}: ${err.message}`);
        }
      })
      .on('end', () => {
        console.log('CSV file processed' + filePath);
      });
};

module.exports = {importData};

