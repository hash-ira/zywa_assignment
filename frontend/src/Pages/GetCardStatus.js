import React from 'react';
import axios from 'axios';
import Stepper from '../components/Stepper';
import toast, { Toaster } from 'react-hot-toast';

function GetCardStatus() {
    const [inputText, setInputText] = React.useState("");
    const [cardStatusData, setCardStatusData] = React.useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const inputNumber = parseInt(inputText);
        const isPhoneNumber = !isNaN(inputNumber) && inputText.length === 9;
        
        try {
            const requestData = isPhoneNumber ? { phoneNumber: inputText } : { cardId: inputText.toUpperCase() };
            const { data } = await axios.post("/get_card_status", requestData);
            setCardStatusData(data);
        } catch (err) {
            setCardStatusData([]);
            toast.error("Status with given Card ID or Phone Number not found.");
            console.log(err.message);
        }
    }

    React.useEffect(() => {
        console.log(cardStatusData);
    }, [cardStatusData]);

    return (
        <div className='flex flex-col items-center h-full pt-10'>
            <Toaster />
            <h2 className='font-sans text-4xl font-bold text-[#FF35A3] mb-10'> <span className='font-sans text-white text-4xl font-bold'>Check </span>
                Card Status
            </h2>
            <form className='flex space-x-2 items-center' onSubmit={handleSubmit}>
                <input
                    type='text'
                    className='w-72 h-10 border border-gray-300 text-gray-900 text-sm rounded-full  focus:ring-blue-500 focus:border-blue-500 block pl-4'
                    placeholder='Enter 9 digit Phone number or Card ID'
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    required
                />

                <button
                    type='submit'
                    className='px-4 h-10 rounded-full bg-blue-500 text-white text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-600'
                >
                    Submit
                </button>
            </form>

            { cardStatusData.length > 0 && <Stepper cardStatusData={cardStatusData}/>}
        </div>
    )
}

export default GetCardStatus;
