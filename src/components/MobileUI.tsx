'use client';

import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import MobileSideBar from './MobileSideBar';
import { Navigation } from '@/types/types';
interface MobileUIProps {
  navigation: Navigation;
}
  
const MobileUI: React.FC<MobileUIProps> = ({ navigation }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
    <MobileSideBar navigation={navigation} open={open} setOpen={setOpen} />
    <button
      type="button"
      onClick={() => setOpen(true)}
      className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
    >
      <span className="absolute -inset-0.5" />
      <span className="sr-only">Open menu</span>
      <Bars3Icon aria-hidden="true" className="size-6" />
    </button>
    </>
  );
};

export default MobileUI;