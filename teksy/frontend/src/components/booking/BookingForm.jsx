import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useBooking } from '@/hooks/useBooking';

const handleBooking = async () => {
  const token = localStorage.getItem('token');

  const response = await fetch('http://localhost:5000/api/bookings', {
      method: 'POST',
      headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ pickup, destination, date }),
  });

  const data = await response.json();
  if (data.success) {
      alert('Ride booked successfully!');
  } else {
      alert(data.message);
  }
};


const bookingSchema = z.object({
  pickup: z.string().min(1, 'Pickup location is required'),
  dropoff: z.string().min(1, 'Dropoff location is required'),
  passengers: z.number().min(1).max(4)
});

export function BookingForm() {
  const { createBooking } = useBooking();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(bookingSchema)
  });

  const onSubmit = async (data) => {
    try {
      await createBooking(data);
    } catch (error) {
      console.error('Booking failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input
          {...register('pickup')}
          placeholder="Pickup Location"
          className="w-full"
        />
        {errors.pickup && (
          <span className="text-sm text-red-500">{errors.pickup.message}</span>
        )}
      </div>

      <div>
        <Input
          {...register('dropoff')}
          placeholder="Dropoff Location"
          className="w-full"
        />
        {errors.dropoff && (
          <span className="text-sm text-red-500">{errors.dropoff.message}</span>
        )}
      </div>

      <div>
        <Input
          {...register('passengers', { valueAsNumber: true })}
          type="number"
          placeholder="Number of passengers"
          min="1"
          max="4"
          className="w-full"
        />
        {errors.passengers && (
          <span className="text-sm text-red-500">{errors.passengers.message}</span>
        )}
      </div>

      <Button type="submit" className="w-full">
        Request Ride
      </Button>
    </form>
  );
}
