import { 
  BookOpen, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Heart,
  ArrowUp
} from 'lucide-react';
import AppLogo from '../Components/AppLogo';
const Footer = () => {
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row md:justify-between gap-8">
            
            <div className="lg:col-span-1">
              <AppLogo />                
              <p className="text-gray-300 font-bold font-cairo mb-6 leading-relaxed">
                منصة تعليمية شاملة تهدف إلى توفير محتوى تعليمي عالي الجودة لجميع الطلاب في مختلف المراحل الدراسية.
              </p>
              
              <div className="flex gap-4">
                <a href="#" className="p-2 bg-slate-700 hover:bg-primary rounded-lg transition-colors duration-300">
                  <Facebook size={18} />
                </a>
                <a href="#" className="p-2 bg-slate-700 hover:bg-primary rounded-lg transition-colors duration-300">
                  <Twitter size={18} />
                </a>
                <a href="#" className="p-2 bg-slate-700 hover:bg-primary rounded-lg transition-colors duration-300">
                  <Instagram size={18} />
                </a>
                <a href="#" className="p-2 bg-slate-700 hover:bg-primary rounded-lg transition-colors duration-300">
                  <Youtube size={18} />
                </a>
              </div>
            </div>


            

            <div>
              <h4 className="text-lg font-semibold mb-6">تواصل معنا</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-700 rounded-lg">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">البريد الإلكتروني</p>
                    <p className="text-gray-300">info@ta3lim.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-700 rounded-lg">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">الهاتف</p>
                    <p className="text-gray-300">+212705339362</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-700 rounded-lg">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">العنوان</p>
                    <p className="text-gray-300">المغرب</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-gray-400">
                <span>© {currentYear} منصة التعلم الرقمية. جميع الحقوق محفوظة.</span>
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </footer>
  );
};

export default Footer;
