"use client";
import { CheckCircle } from "lucide-react";
import React from "react";

const SuccessPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
                <h1 className="text-2xl font-bold mt-4 text-gray-800">Ticket Submitted!</h1>
                <p className="mt-2 text-gray-600">
                    Your ticket has been successfully submitted. Our team will get back to you shortly.
                </p>
                <div className="mt-6">
                    <button
                        onClick={() => window.location.href = "/form.html"} // redirect to homepage or ticket page
                        className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                    >
                        Submit another Ticket
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SuccessPage;
