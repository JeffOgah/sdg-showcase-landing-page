import React, {useState, useContext, useEffect } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { ProjectContext } from '../contexts/context';
import { SustainableModalContext } from '../contexts/ModalContext';
import SustainableList from '../components/SustainableList';
import Aos from 'aos';
import "aos/dist/aos.css";
import SustainableDetails from '../components/SustainableDetails';
import { ModeContext } from '../contexts/ModeContext';


export default function SustainableCities() {
       useEffect(() => {
        Aos.init({
            duration: 2000
        })
       }, [])

    
    let [sustainModal, setSustainModal] = useState(false);
    
    let { sustainableCities } = useContext(ProjectContext);
    let { darkMode } = useContext(ModeContext);

    let [selectedProject, setSelectedProject] = useState(null);

      const onProjectSelect = (project) => {
        setSelectedProject(project);
    }


    return (
        <SustainableModalContext.Provider value={{ sustainModal, setSustainModal}}>
            <div className={darkMode ? `dark-mode bg-section2` : `light-mode bg-section2`}>
                <Header />
                <div className="container">
                    <div style={{ background: '#FB9D24'}} className="theme-project"><span className={darkMode ? 'color-dark' : 'color-light'}>Theme</span></div>

                    <h2 style={{ color: '#FB9D24'}} className="top-projects  my-5">Sustainable Cities</h2>

                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <p className={darkMode ? `color-light text-space h3 font-weight-bold` : `color-dark text-space h3 font-weight-bold`}>Goal 11 is focused on making cities and human settlements inclusive, safe, resilient and sustainable.</p>
                        </div>
                    </div>


                    <div className="container py-5">
                        <div className="row">
                            <div className="col-lg-8 col-sm-12">
                                <h2 className={darkMode ? `font-weight-bold pb-2 color-light` : `font-weight-bold pb-2`}>Problem Statements</h2>
                                <p className={darkMode ? `color-light h3 pb-2` : `h3 pb-2`}>Reduce The Environmental Impact of Cities.</p>
                                <p style={{ color: '#777' }} className="h4 pb-2">- By 2030, there must be a reduction in the environmental impact of cities per-capita, This could be achieved by paying special attention to air quality and the regulation of waste management. </p>
                                <p style={{ color: '#FB9D24' }} className="h4 pb-2">- Identify an environmental problem in your community(air, land, waste, etc.) with your team, help build a solution that could control and regulate its adverse impact. Your solution must be inclusive, safe and sustainable.</p>
                                <p className={darkMode ? `color-light h3 pb-2` : `h3 pb-2`}>Sustainable Financial System.</p>
                                <p style={{ color: '#777' }} className="h4 pb-2">- Think of a world where technology could help simplify the access to financial services across communities, ease-off and structure the processes in loan distribution and foster innovative SME funding models.. </p>
                                <p style={{ color: '#FB9D24' }} className="h4 pb-2">- Pick a framework and apply your teams best idea on how the Smart City concept could  be brought to life. </p>
                            </div>

                        </div>
                    </div>




                    <div className="row my-5">
                        <div className="col">

                            <p className={darkMode ? `color-light font-weight-bold h2 text-theme mb-5` : `color-dark font-weight-bold h2 text-theme mb-5`}>Explore by theme</p>
                            <div className="themeproject-container">
                                <Link to="/themes/No-Poverty" style={{ background: '#E5243B' }} className=' text-white health font-weight-bold px-2 py-3'>
                                    No Poverty
                                </Link>
                                <Link to="/themes/Zero-Hunger" style={{ background: '#DDA639' }} className='text-white active-box health font-weight-bold px-2 py-3'>Zero Hunger</Link>
                                <Link to="/themes/Patnerships-For-Goals" style={{ background: '#19486A' }} className='text-white health font-weight-bold  px-2 py-3'>Partnership 4Goals</Link>
                                <Link to="/themes/Good-Health-And-Wellbeing" style={{ background: '#4C9F38' }} className='text-white health font-weight-bold px-2 py-3'>Good Health and...</Link>
                                <Link to="/themes/Quality-Education" style={{ background: '#C5192D' }} className='text-white health font-weight-bold px-2 py-3'>Quality-Education</Link>
                                <Link to="/themes/Peace-And-Justice" style={{ background: '#10689D' }} className='text-white health font-weight-bold px-2 py-3'>Peace-And-Justice</Link>
                                <Link to="/themes/Decent-Work" style={{ background: '#A21942' }} className='text-white health font-weight-bold px-2 py-3'>Decent-Work</Link>
                                <Link to="/themes/Industry-innovation" style={{ background: '#FA6926' }} className='text-white health font-weight-bold px-2 py-3'>Industry-Innovation</Link>
                                <Link to="/themes/Sustainable-Cities" style={{ background: '#FB9D24', boxShadow: darkMode ? `#222 0px 0px 0px 3px, #FB9D24 0px 0px 0px 6px` : `#fff 0px 0px 0px 3px, #FB9D24 0px 0px 0px 6px` }} className='text-white health font-weight-bold px-2 py-3'>Sustainable-Cities</Link>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="">
                            <SustainableDetails project={selectedProject}/>
                            
                            <SustainableList projects={sustainableCities} onProjectSelect={onProjectSelect} />

                        </div>
                        
                    </div>

                </div>
            </div>
        </SustainableModalContext.Provider>
        
    )
}
