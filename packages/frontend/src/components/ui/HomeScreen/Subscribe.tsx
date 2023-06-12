import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';

import client from '@api/client';
import { Button } from '@components/shared';
import useChakraToast from 'src/hooks/useChakraToast';

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Subscribe = () => {
  const [input, setInput] = useState('');
  const toast = useChakraToast();

  const { mutate: mutateSubscribe, isLoading: isLoading } = useMutation(
    () => client.api.taskManagerControllerGetAllTasks(),
    {
      onSuccess: () => {
        setInput('');
        toast({
          title: 'Thank you for subscribing to Sudope!',
          status: 'success',
        });
      },
      onError: (err: any) => {
        toast({
          title: err?.response?.data?.message || 'Something went wrong!',
          status: 'error',
        });
      },
    },
  );

  const handleSubmit = () => {
    if (!input) {
      toast({
        title: 'Please enter your email',
        status: 'error',
      });
      return;
    }
    //regex email
    if (!emailRegex.test(input)) {
      toast({
        title: 'Please enter your email correctly',
        status: 'error',
      });
      return;
    }
    mutateSubscribe();
  };

  return (
    <div className="flex w-full flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0">
      <div className="bg-white grow h-11 rounded-3xl">
        <input
          type="email"
          placeholder="Your email"
          className="w-full h-full pl-5 pr-5 rounded-3xl outline-none hover:bg-gray-100"
          onChange={e => setInput(e.target.value)}
          value={input}
        />
      </div>
      <Button
        className="min-w-[160px]
        hover:scale-105
        active:scale-95
      "
        isLoading={isLoading}
        onClick={handleSubmit}
      >
        SUBSCRIBE
      </Button>
    </div>
  );
};

export default Subscribe;
