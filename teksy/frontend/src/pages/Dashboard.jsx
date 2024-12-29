import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapContainer } from '@/components/map/MapContainer';
import { BookingHistory } from '@/components/booking/BookingHistory';
import { useBookings } from '@/hooks/useBookings';

export default function Dashboard() {
  const { user } = useAuth();
  const { latestBookings, isLoading } = useBookings();
  const [activeTab, setActiveTab] = useState('bookRide');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - User Profile & Quick Actions */}
        <div className="space-y-6">
          <Card className="p-6">
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-xl font-bold text-primary">
                  {user.name[0]}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">{user.name}</h3>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Button 
                variant={activeTab === 'bookRide' ? 'default' : 'outline'}
                className="w-full"
                onClick={() => setActiveTab('bookRide')}
              >
                Book a Ride
              </Button>
              <Button 
                variant={activeTab === 'history' ? 'default' : 'outline'}
                className="w-full"
                onClick={() => setActiveTab('history')}
              >
                Ride History
              </Button>
            </div>
          </Card>
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-6">
          {activeTab === 'bookRide' ? (
            <div className="space-y-6">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4">Book a Ride</h2>
                <MapContainer />
                <BookingForm />
              </Card>
            </div>
          ) : (
            <BookingHistory />
          )}
        </div>
      </div>
    </div>
  );
}
