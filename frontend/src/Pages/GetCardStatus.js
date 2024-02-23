import React from 'react';
import axios from 'axios';

function GetCardStatus() {
    const [inputText, setInputText] = React.useState("")
    const [cardStatusData, setCardStatusData] = React.useState([])

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        try {
            const { data } = await axios.post("/get_card_status", { cardId: inputText });
            setCardStatusData(data);
        } catch (err) {
            console.log(err.message);
        }
    }

    React.useEffect(() => {
        console.log(cardStatusData);
    }, [cardStatusData]);

    return (
        <div className='flex justify-center items-center bg-slate-400 h-full'>
            <form onSubmit={handleSubmit}> {/* Corrected: Added onSubmit event handler */}
                <input
                    type='text'
                    className='border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5'
                    placeholder='Enter Phone number of Card ID'
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    required
                />

                <button
                    type='submit'
                    className='ml-2 px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-600 mt-2'
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default GetCardStatus;
