import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface IPEntry {
  ip: string;
  label: string;
  time: string;
  id: number;
}

const ProductDemo = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [ipList, setIpList] = useState<IPEntry[]>([
    { ip: "192.168.1.0/24", label: "Office Network", time: "2h ago", id: 1 },
    { ip: "10.0.0.1/32", label: "VPN Gateway", time: "1d ago", id: 2 },
  ]);

  const currentIP = "203.0.113.42";

  const handleAddIP = () => {
    if (isAdded) return;

    setIsAdding(true);

    setTimeout(() => {
      const newEntry: IPEntry = {
        ip: `${currentIP}/32`,
        label: "Current Session",
        time: "now",
        id: Date.now(),
      };

      setIpList((prev) => [newEntry, ...prev]);
      setIsAdding(false);
      setIsAdded(true);

      setTimeout(() => setIsAdded(false), 3000);
    }, 1000);
  };

  const removeIP = (id: number) => {
    setIpList((prev) => prev.filter((entry) => entry.id !== id));
  };

  const features = [
    "One-click current IP addition",
    "Bulk IP management with CIDR support",
    "Label and organize access rules",
    "Real-time access monitoring",
    "Automatic cleanup of old entries",
  ];

  const handleScrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="demo" className="py-20 bg-secure-light">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-secure-black leading-tight tracking-tight mb-6">
                See it in action
              </h2>
              <p className="text-lg text-secure-gray leading-relaxed">
                Experience the power of centralized IP management with our
                intuitive dashboard. Add your current IP instantly, manage bulk
                entries with CIDR notation, and monitor access in real-time.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full bg-secure-green flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-secure-gray">{feature}</span>
                </div>
              ))}
            </div>

            <button
              className="bg-secure-black text-white px-8 py-3 rounded-xl font-medium hover:translate-y-[-2px] hover:shadow-lg transition-all duration-200"
              onClick={handleScrollToPricing}
            >
              Try it Free
            </button>
          </div>

          {/* Right Column - Interactive Dashboard */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-secure-border">
              {/* Browser Chrome */}
              <div className="bg-gray-50 px-6 py-4 border-b border-secure-border">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="bg-white rounded-lg px-4 py-1.5 text-sm text-gray-600 font-mono flex-1">
                    https://secure.your-site.com/dashboard
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-secure-black mb-2">
                    System Status → Allowed IPs
                  </h3>
                  <p className="text-sm text-secure-gray">
                    Manage IP addresses that can access your WordPress admin
                    areas
                  </p>
                </div>

                {/* Current IP Section */}
                <div className="bg-secure-light rounded-lg p-4 space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="px-2 py-1 bg-secure-green text-white text-xs font-medium rounded">
                      Current IP
                    </div>
                    <span className="font-mono text-sm text-secure-black">
                      {currentIP}
                    </span>
                  </div>

                  <button
                    onClick={handleAddIP}
                    disabled={isAdding || isAdded}
                    className={cn(
                      "w-full py-2.5 px-4 rounded-lg font-medium transition-all duration-300",
                      isAdded
                        ? "bg-secure-green text-white"
                        : isAdding
                          ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                          : "bg-secure-black text-white hover:translate-y-[-1px] hover:shadow-md",
                    )}
                  >
                    {isAdded ? (
                      <span className="flex items-center justify-center space-x-2">
                        <Check className="w-4 h-4" />
                        <span>✓ Added Successfully!</span>
                      </span>
                    ) : isAdding ? (
                      "Adding..."
                    ) : (
                      `Add ${currentIP} to the list`
                    )}
                  </button>
                </div>

                {/* IP Table */}
                <div>
                  <h4 className="font-medium text-secure-black mb-3">
                    Current allow-list
                  </h4>
                  <div className="border border-secure-border rounded-lg overflow-hidden">
                    <div className="bg-gray-50 px-4 py-3 border-b border-secure-border">
                      <div className="grid grid-cols-4 gap-4 text-sm font-medium text-secure-gray">
                        <span>IP Address</span>
                        <span>Label</span>
                        <span>Time</span>
                        <span>Action</span>
                      </div>
                    </div>
                    <div className="divide-y divide-secure-border">
                      {ipList.map((entry, index) => (
                        <div
                          key={entry.id}
                          className={cn(
                            "px-4 py-3 grid grid-cols-4 gap-4 items-center transition-all duration-300",
                            index === 0 &&
                              entry.time === "now" &&
                              "bg-green-50 animate-pulse",
                          )}
                        >
                          <span className="font-mono text-sm text-secure-black">
                            {entry.ip}
                          </span>
                          <span className="text-sm text-secure-gray">
                            {entry.label}
                          </span>
                          <span className="text-sm text-secure-gray">
                            {entry.time}
                          </span>
                          <button
                            onClick={() => removeIP(entry.id)}
                            className="text-red-500 hover:text-red-700 text-sm font-medium transition-colors duration-200 text-left"
                          >
                            Delete
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDemo;
