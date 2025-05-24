
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Navigation = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <nav className="relative z-10 flex items-center justify-between px-6 py-4 lg:px-8 bg-white shadow-sm">
        <Link to="/" className="flex items-center space-x-2">
          <GraduationCap className="h-8 w-8 text-green-600" />
          <span className="text-2xl font-bold text-green-800">AMASHURI</span>
          <span className="text-sm text-gray-600">.rw</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/schools">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Schools
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/about">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/school-website">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    School Website
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/buying">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Packages
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-2 ml-4">
            <Button 
              variant="outline" 
              onClick={() => setShowLogin(true)}
              className="border-green-600 text-green-600 hover:bg-green-50"
            >
              Login
            </Button>
            <Button 
              onClick={() => setShowRegister(true)}
              className="bg-green-600 hover:bg-green-700"
            >
              Register
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-t shadow-lg md:hidden">
            <div className="flex flex-col space-y-4 p-6">
              <Link to="/schools" className="text-gray-700 hover:text-green-600">Schools</Link>
              <Link to="/about" className="text-gray-700 hover:text-green-600">About</Link>
              <Link to="/school-website" className="text-gray-700 hover:text-green-600">School Website</Link>
              <Link to="/buying" className="text-gray-700 hover:text-green-600">Packages</Link>
              <div className="flex flex-col space-y-2">
                <Button 
                  variant="outline" 
                  onClick={() => setShowLogin(true)}
                  className="border-green-600 text-green-600"
                >
                  Login
                </Button>
                <Button 
                  onClick={() => setShowRegister(true)}
                  className="bg-green-600 hover:bg-green-700"
                >
                  Register
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Login Modal */}
      {showLogin && (
        <LoginForm 
          isOpen={showLogin} 
          onClose={() => setShowLogin(false)}
          onSwitchToRegister={() => {
            setShowLogin(false);
            setShowRegister(true);
          }}
        />
      )}

      {/* Register Modal */}
      {showRegister && (
        <RegisterForm 
          isOpen={showRegister} 
          onClose={() => setShowRegister(false)}
          onSwitchToLogin={() => {
            setShowRegister(false);
            setShowLogin(true);
          }}
        />
      )}
    </>
  );
};

export default Navigation;
