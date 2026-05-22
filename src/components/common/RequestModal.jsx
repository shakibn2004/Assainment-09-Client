'use client';

import { Button, Modal } from '@heroui/react';
import { useEffect, useState } from 'react';
import { Slide, toast } from 'react-toastify';

const RequestModal = ({ petId, petIsAvailable }) => {

    const [rqData, setRqData] = useState(null);
    const [loading, setLoading] = useState(false);

    // Fetch requested pet data
    useEffect(() => {

        const fetchPetData = async () => {
            try {

                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_LOCAL_URI}/public/all-adopted-pets`
                );

                const data = await response.json();

                const foundPet = data.find(
                    pet => pet._id.toString() === petId.toString()
                );

                setRqData(foundPet);


            } catch (error) {
                console.log(error);
            }
        };

        fetchPetData();

    }, [petId]);




    // Handle approve / reject
    const handleRequest = async (status) => {

        try {

            setLoading(true);

            const updatedPet = {
                ...rqData,
                requeststatus: status,
                isAvailable: status === 'Approved' ? false : true,
            };

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_LOCAL_URI}/public/all-adopted-pets/${petId}`,
                {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(updatedPet),
                }
            );

            if (!response.ok) {
                throw new Error('Failed to update request');
            }

            const result = await response.json();


            toast.success(`Request ${status} Successfully`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Slide,
            });

        } catch (error) {

            toast.success('Error Happend', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Slide,
            });
        } finally {

            setLoading(false);

        }
    };



    return (
        <div>

            <Modal>

                {/* Open Modal Button */}
                <Button
                    variant="secondary"
                    className="secondary-border bg-white rounded"
                >
                    Request ({petIsAvailable ? '0' : '1'})
                </Button>



                <Modal.Backdrop>

                    <Modal.Container>

                        <Modal.Dialog className="sm:max-w-96">

                            <Modal.CloseTrigger />



                            {/* Header */}
                            <Modal.Header className="flex flex-row items-center">

                                <h1 className='text-2xl font-semibold'>
                                    Requested for
                                    <span className='primary-text'>
                                        {' '}
                                        {rqData?.name || 'Pet'}
                                    </span>
                                </h1>

                            </Modal.Header>



                            {/* Body */}
                            <Modal.Body className='flex flex-col gap-3'>

                                <h1 className='text-md font-bold text-black'>
                                    Buyer Name:{' '}
                                    <span className='text-sm secondary-text font-normal'>
                                        {rqData?.buyername || 'None'}
                                    </span>
                                </h1>

                                <h1 className='text-md font-bold text-black'>
                                    Buyer Email:{' '}
                                    <span className='text-sm secondary-text font-normal'>
                                        {rqData?.buyeremail || 'No email found'}
                                    </span>
                                </h1>

                                <h1 className='text-md font-bold text-black'>
                                    Pickup Date:{' '}
                                    <span className='text-sm secondary-text font-normal'>
                                        {rqData?.pickupdate || 'No pickup date'}
                                    </span>
                                </h1>

                                <h1 className='text-md font-bold text-black'>
                                    Current Status:{' '}
                                    <span className='text-sm secondary-text font-normal'>
                                        {rqData?.status || 'Pending'}
                                    </span>
                                </h1>

                            </Modal.Body>



                            {/* Footer */}
                            <Modal.Footer>

                                {/* Reject Button */}
                                <Button
                                    onClick={() => handleRequest('Rejected')}
                                    disabled={loading}
                                    className="border-2 border-red-600 bg-white text-red-600 rounded"
                                >
                                    {
                                        loading
                                            ? 'Loading...'
                                            : 'Reject'
                                    }
                                </Button>



                                {/* Approve Button */}
                                <Button
                                    onClick={() => handleRequest('Approved')}
                                    disabled={loading}
                                    className="primary-btn font-bold"
                                >
                                    {
                                        loading
                                            ? 'Loading...'
                                            : 'Approve'
                                    }
                                </Button>

                            </Modal.Footer>

                        </Modal.Dialog>

                    </Modal.Container>

                </Modal.Backdrop>

            </Modal>

        </div>
    );
};

export default RequestModal;