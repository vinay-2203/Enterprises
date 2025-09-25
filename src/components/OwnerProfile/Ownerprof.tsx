import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React from "react";

const Ownerprof: React.FC = () => {
  return (
    <div className="p-6 space-y-8 bg-gray-50 min-h-screen">
      {/* Header Actions */}
      <div className="flex justify-center flex-wrap gap-4">
        <Button variant="outline">Manage Properties</Button>
        <Button variant="outline">Claim your Properties</Button>
        <Button variant="outline">Search</Button>
        <Button variant="outline">Back to Home</Button>
      </div>

      {/* Welcome Section */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold">Welcome Back, Sudheer!</h2>
        <p className="text-gray-500 mt-2">
          Here’s what’s happening with your property portfolio.
        </p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Card className="shadow-sm">
          <CardContent className="text-center p-6">
            <p className="text-lg font-medium">Total Properties</p>
            <p className="text-2xl font-bold">0</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardContent className="text-center p-6">
            <p className="text-lg font-medium">Rented Properties</p>
            <p className="text-2xl font-bold">0</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardContent className="text-center p-6">
            <p className="text-lg font-medium">For Sale</p>
            <p className="text-2xl font-bold">0</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardContent className="text-center p-6">
            <p className="text-lg font-medium">Revenue</p>
            <p className="text-2xl font-bold">₹0</p>
          </CardContent>
        </Card>
      </div>

      {/* Circle Stats */}
      <div className="grid grid-cols-3 gap-6 text-center">
        <Card className="shadow-sm">
          <CardContent className="flex flex-col items-center p-6">
            <div className="w-16 h-16 rounded-full border-4 border-green-400 flex items-center justify-center text-xl font-bold">
              0
            </div>
            <p className="mt-2">Booked</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardContent className="flex flex-col items-center p-6">
            <div className="w-16 h-16 rounded-full border-4 border-blue-400 flex items-center justify-center text-xl font-bold">
              0
            </div>
            <p className="mt-2">Registered</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardContent className="flex flex-col items-center p-6">
            <div className="w-16 h-16 rounded-full border-4 border-yellow-400 flex items-center justify-center text-xl font-bold">
              0
            </div>
            <p className="mt-2">Delivered</p>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Total Investment</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-600">
              <li>• Investment 1</li>
              <li>• Investment 2</li>
              <li>• Investment 3</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Payment History</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-600">
              <li>• Payment #1</li>
              <li>• Payment #2</li>
              <li>• Payment #3</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-sm md:col-span-2">
          <CardHeader>
            <CardTitle>Builder’s Update</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-600">
              <li>• Update #1</li>
              <li>• Update #2</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Ownerprof;