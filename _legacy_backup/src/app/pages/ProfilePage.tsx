import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import {
  User, Mail, Phone, MapPin, Settings, Bell, Heart, Building2, Edit,
  Camera, Eye, MessageSquare, Shield, CreditCard, LogOut, ChevronRight, Clock
} from "lucide-react";
import { motion } from "motion/react";
import { useFavorites } from "../hooks/useFavorites";

export function ProfilePage() {
  const { favorites } = useFavorites();

  return (
    <div className="min-h-screen bg-gray-50/50 pb-20 md:pb-0">
      <section className="py-12 md:py-20 border-b bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full -mr-48 -mt-48 blur-3xl opacity-50" />
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row items-center gap-8"
          >
            <div className="relative group">
              <div className="w-32 h-32 rounded-[2.5rem] bg-gradient-to-br from-[#1565C0] to-[#0D47A1] p-1 shadow-2xl">
                <div className="w-full h-full rounded-[2.3rem] bg-white overflow-hidden border-4 border-white">
                  <img src="https://i.pravatar.cc/150?u=shiven" alt="profile" />
                </div>
              </div>
              <button className="absolute -bottom-2 -right-2 p-3 bg-white rounded-2xl shadow-xl text-[#1565C0] hover:scale-110 transition-transform">
                <Camera className="h-5 w-5" />
              </button>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-black text-[#212121] tracking-tighter italic">
                Shiven <span className="text-[#1565C0] not-italic">Pro.</span>
              </h1>
              <p className="text-gray-400 font-medium mt-1 uppercase tracking-widest text-[10px]">Verified Member since 2024</p>
              <div className="flex items-center gap-4 mt-6">
                <Button className="h-10 px-6 bg-[#1565C0] rounded-xl text-[10px] font-black uppercase tracking-widest">Edit Profile</Button>
                <Button variant="outline" className="h-10 px-6 border-gray-200 rounded-xl text-[10px] font-black uppercase tracking-widest">Settings</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <ProfileStatCard count={favorites.length} label="Shortlisted" desc="Properties you loved" icon={Heart} color="text-red-500" bg="bg-red-50" />
          <ProfileStatCard count="2" label="Waitlist" desc="Active inquiries" icon={Clock} color="text-orange-500" bg="bg-orange-50" />
          <ProfileStatCard count="12" label="Viewed" desc="Recenty visited" icon={Eye} color="text-[#1565C0]" bg="bg-blue-50" />
          <ProfileStatCard count="3" label="Contacted" desc="Owner interactions" icon={MessageSquare} color="text-green-600" bg="bg-green-50" />
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-2xl font-black text-[#212121] italic">Account Activity</h2>
            <div className="space-y-4">
              <ActivityCard title="Price Drop Alarm" info="Luxury Villa in Gurgaon dropped by $50K" date="2 hours ago" />
              <ActivityCard title="New Match Found" info="Modern Apartment in Bangalore matches your search" date="1 day ago" />
              <ActivityCard title="Profile Updated" info="Your mobile number was verified successfully" date="3 days ago" />
            </div>
          </div>

          <div className="lg:col-span-1 space-y-8">
            <h2 className="text-2xl font-black text-[#212121] italic">Quick Actions</h2>
            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-blue-900/5 space-y-4">
              <ActionItem icon={Bell} label="Notification Settings" />
              <ActionItem icon={Shield} label="Privacy & Security" />
              <ActionItem icon={CreditCard} label="Payments & Plans" />
              <div className="pt-4 border-t">
                <ActionItem icon={LogOut} label="Log Out" color="text-red-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileStatCard({ count, label, desc, icon: Icon, color, bg }: any) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="p-8 bg-white rounded-[2.5rem] border border-gray-100 shadow-xl shadow-blue-900/5"
    >
      <div className={`w-12 h-12 ${bg} rounded-2xl flex items-center justify-center ${color} mb-6`}>
        <Icon className="h-6 w-6" />
      </div>
      <p className="text-4xl font-black text-[#212121] tracking-tighter mb-1">{count}</p>
      <p className="font-black text-gray-800 text-sm uppercase tracking-widest">{label}</p>
      <p className="text-xs text-gray-400 font-medium mt-1">{desc}</p>
    </motion.div>
  );
}

function ActivityCard({ title, info, date }: any) {
  return (
    <div className="flex items-center justify-between p-6 bg-white rounded-[1.5rem] border border-gray-50 hover:border-blue-100 transition-colors group">
      <div className="flex items-center space-x-4">
        <div className="w-2 h-2 rounded-full bg-[#1565C0] group-hover:scale-150 transition-transform" />
        <div>
          <h4 className="font-bold text-[#212121] text-sm">{title}</h4>
          <p className="text-xs text-gray-400 font-medium mt-0.5">{info}</p>
        </div>
      </div>
      <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">{date}</span>
    </div>
  );
}

function ActionItem({ icon: Icon, label, color = "text-gray-600" }: any) {
  return (
    <button className="flex items-center justify-between w-full p-4 hover:bg-gray-50 rounded-2xl transition-colors group">
      <div className="flex items-center space-x-4">
        <Icon className={`h-5 w-5 ${color}`} />
        <span className={`text-sm font-bold ${color}`}>{label}</span>
      </div>
      <ChevronRight className="h-4 w-4 text-gray-300 group-hover:translate-x-1 transition-transform" />
    </button>
  );
}
