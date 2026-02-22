import { motion } from "motion/react";
import { Clock, CheckCircle2, MapPin, ArrowRight, MessageSquare } from "lucide-react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

const waitlistItems = [
    {
        id: "1",
        title: "Modern Apartment in Downtown",
        location: "Gurgaon, Sector 45",
        price: "$1,200,000",
        status: "Pending",
        date: "Applied on Oct 12, 2024",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop"
    },
    {
        id: "2",
        title: "Luxury Villa with Pool",
        location: "Bangalore, Whitefield",
        price: "$2,500,000",
        status: "Responded",
        date: "Applied on Oct 15, 2024",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop"
    }
];

export function WaitlistPage() {
    return (
        <div className="min-h-screen bg-gray-50/50 pb-20 md:pb-0">
            {/* Header */}
            <section className="py-12 md:py-20 border-b bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full -mr-48 -mt-48 blur-3xl opacity-50" />
                <div className="container px-4 md:px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-4xl font-black text-[#212121] tracking-tighter italic">
                            My <span className="text-[#1565C0] not-italic">Waitlist.</span>
                        </h1>
                        <p className="text-gray-400 font-medium mt-2">Track status of your property inquiries and visits.</p>
                    </motion.div>
                </div>
            </section>

            {/* List */}
            <section className="py-12 md:py-20">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6">
                        {waitlistItems.map((item, idx) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-xl shadow-blue-900/5 flex flex-col md:flex-row gap-6 hover:border-[#1565C0]/20 transition-all group"
                            >
                                <div className="w-full md:w-48 h-32 rounded-2xl overflow-hidden flex-shrink-0">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="flex-1 flex flex-col justify-center">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-lg font-black text-[#212121]">{item.title}</h3>
                                        <Badge className={`${item.status === 'Responded' ? 'bg-green-50 text-green-600' : 'bg-blue-50 text-[#1565C0]'
                                            } border-0 uppercase text-[10px] font-black tracking-widest px-3 py-1 rounded-full`}>
                                            {item.status}
                                        </Badge>
                                    </div>
                                    <div className="flex items-center text-xs font-bold text-gray-400 mb-4">
                                        <MapPin className="h-3 w-3 mr-1" /> {item.location}
                                        <span className="mx-2 font-light">|</span>
                                        <span className="text-[#1565C0]">{item.price}</span>
                                    </div>
                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                                        <div className="flex items-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                            <Clock className="h-3 w-3 mr-1" /> {item.date}
                                        </div>
                                        <Link to={`/property/${item.id}`}>
                                            <Button variant="ghost" className="text-[#1565C0] font-black text-xs h-8 px-4 hover:bg-blue-50 rounded-xl">
                                                View Listing <ArrowRight className="h-3 w-3 ml-2" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {waitlistItems.length === 0 && (
                        <div className="text-center py-20 bg-white rounded-[3rem] border border-gray-100 shadow-xl">
                            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <MessageSquare className="h-10 w-10 text-[#1565C0]" />
                            </div>
                            <h3 className="text-xl font-black text-[#212121] mb-2">No active inquiries</h3>
                            <p className="text-gray-400 font-medium mb-8">You haven't added any properties to your waitlist yet.</p>
                            <Link to="/properties">
                                <Button className="h-12 px-8 bg-[#1565C0] rounded-xl font-black uppercase tracking-widest shadow-lg shadow-blue-200">
                                    Browse Properties
                                </Button>
                            </Link>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
