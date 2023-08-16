import { useState, useEffect } from "react"
import Swal from "sweetalert2";


async function sendContactData(details) {
    console.log(details)
    const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(details),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    // console.log(response)
    const data = await res.json();

    if (!res.ok) {
        console.log("error");
        throw new Error(data.message || 'Something went wrong!');
    } else {
        Swal.fire({
            title: 'Success!',
            text: 'Your message has been sent.',
            icon: 'success',
            confirmButtonText: 'OK',
        })
    }
}



export default function Contact() {
    const [enteredSubject, setenteredSubject] = useState('')
    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredMessage, setEnteredMessage] = useState('')
    const [requestStatus, setRequestStatus] = useState();
    const [requestError, setRequestError] = useState();

    useEffect(() => {
        if (requestStatus === 'success' || requestStatus === 'error') {
            const timer = setTimeout(() => {
                setRequestStatus(null);
                setRequestError(null);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [requestStatus]);


    async function sendMessageHandler(event) {
        event.preventDefault();

        setRequestStatus('pending');

        try {
            sendContactData({
                email: enteredEmail,
                subject: enteredSubject,
                message: enteredMessage
            });
            console.log(enteredEmail, enteredSubject, enteredMessage)
            setRequestStatus('success');
            setEnteredMessage('');
            setEnteredEmail('');
            setenteredSubject('');
        } catch (error) {
            console.log("error");
            setRequestError(error.message);
            setRequestStatus('error');
            return;
        }


    }

    return (
        <div className="bg-white dark:bg-gray-900 justify-center max-h-screen-2xl pt-10 items-center">
            <div className="px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-5xl leading
                -tight font-extrabold text-center text-orange-500 sm:text-5xl">Contact Me</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let me know.</p>
                <form className="space-y-8" onSubmit={sendMessageHandler}>
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input type="email" id="email" className="shadow-sm bg-slate-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@domain.com" required
                            value={enteredEmail}
                            onChange={(event) => setEnteredEmail(event.target.value)}
                        />
                    </div>
                    <div>
                        <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                        <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-slate-200 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required
                            value={enteredSubject}
                            onChange={(event) => setenteredSubject(event.target.value)}
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                        <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-slate-200 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."
                            value={enteredMessage}
                            onChange={(event) => setEnteredMessage(event.target.value)}
                        ></textarea>
                    </div>
                    <button className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-600 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                </form>
            </div>
        </div>

    )
}