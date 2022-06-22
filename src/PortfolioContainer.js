import React, { useState } from 'react';



export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

    // CHECK TO SEE WHAT THE VALUE OF 'CURRENTPAGE' IS.  WILL RETURN THE CORRESPONDING COMPONENT
    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe />;
        }
        if (currentPage === 'MyWork') {
            return <MyWork />;
        }
        if (currentPage === 'ContactMe') {
            return <ContactMe />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    );
}