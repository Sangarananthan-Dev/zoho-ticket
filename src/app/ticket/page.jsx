'use client';

import React, { useState } from 'react';

const TicketForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        description: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateEmail = (email) => {
        return /^([\w_][\w\-_.+\'&]*)@(?=.{4,256}$)(([\w]+)([\-_]*[\w])*[\.])+[a-zA-Z]{2,22}$/.test(email);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {};

        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last Name cannot be empty';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email cannot be empty';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Enter a valid email-Id';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject cannot be empty';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);

        try {
            const submitData = new FormData();
            submitData.append('xnQsjsdp', 'edbsn5691d8cd3c61a8962dcde12410055f3d');
            submitData.append('xmIwtLD', 'edbsn7f245333309d29feaa2fccca39fe32ab68406569ed7a56db145bfdd5c73d32a3');
            submitData.append('xJdfEaS', '');
            submitData.append('actionType', 'Q2FzZXM=');
            submitData.append('returnURL', 'https://zoho-ticket.vercel.app/success');
            submitData.append('First Name', formData.firstName);
            submitData.append('Contact Name', formData.lastName);
            submitData.append('Email', formData.email);
            submitData.append('Subject', formData.subject);
            submitData.append('Description', formData.description);

            const response = await fetch('https://desk.zoho.in/support/WebToCase', {
                method: 'POST',
                body: submitData,
            });

            if (response.ok) {
                window.location.href = 'https://zoho-ticket.vercel.app/success';
            } else {
                alert('Failed to submit ticket. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleReset = () => {
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            description: ''
        });
        setErrors({});
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Web Form</h2>

                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                First Name
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                maxLength={120}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Last Name
                                <span className="text-red-500 ml-1">*</span>
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                maxLength={120}
                                className={`w-full px-4 py-2 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                            />
                            {errors.lastName && (
                                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email
                                <span className="text-red-500 ml-1">*</span>
                            </label>
                            <input
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                maxLength={120}
                                className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Subject
                                <span className="text-red-500 ml-1">*</span>
                            </label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                maxLength={255}
                                className={`w-full px-4 py-2 border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                            />
                            {errors.subject && (
                                <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Description
                            </label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                maxLength={3000}
                                rows={6}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y"
                            />
                        </div>

                        <div className="flex gap-4 pt-4">
                            <button
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                            </button>
                            <button
                                onClick={handleReset}
                                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
                            >
                                Reset
                            </button>
                        </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-end text-sm text-gray-500">
                        <span>powered by</span>
                        <a
                            href="https://zoho.in/desk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2"
                        >
                            <img
                                src="https://img.zohostatic.in/support/app/images/portalLogo.de847024ebc0131731a3.png"
                                alt="Zoho Desk"
                                className="h-4"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketForm;
