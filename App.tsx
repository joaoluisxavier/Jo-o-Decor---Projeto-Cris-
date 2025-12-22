import React from 'react';
import Header from './components/Header';
import ProjectRenders from './components/ProjectRenders';
import ShoppingList from './components/ShoppingList';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark flex flex-col">
        {/* Background decorative elements */}
        <div className="fixed top-0 left-0 w-full h-[500px] bg-brand-green/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2 z-0"></div>
        
        <div className="relative z-10 flex flex-col w-full">
            <Header />
            
            <main className="flex-grow">
                <ProjectRenders />
                
                {/* Divider */}
                <div className="w-full px-6 md:px-12 my-4">
                    <div className="h-px bg-gradient-to-r from-transparent via-brand-green/30 to-transparent w-full"></div>
                </div>

                <ShoppingList />
                
                <ContactSection />
            </main>
            
            <Footer />
        </div>
    </div>
  );
};

export default App;