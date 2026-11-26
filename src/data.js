// Edit this file to change the content of the site.
// import Pan1 from './components/image/pan1.jpeg';
import Pan2 from "./components/image/pan2.jpeg";
import Pan3 from "./components/image/pan3.jpeg";
import Pan4 from "./components/image/pan4.jpeg";
import Pan5 from "./components/image/pan5.jpeg";
import Pan6 from "./components/image/pan6.jpeg";
import Inverter from './components/image/inverter.jpeg';

export const NAV_LINKS = [
  ['Home', '/#home'],
  ['Explore Work', '/ExploreWork'],
  ['About', '/#about'],
  // ['Tools', '/#tools'],
  ['Contact', '/#contact'],
]

export const STATS = [
  { value: 6, suffix: '+', label: 'Years of experience' },
  { value: 40, suffix: '+', label: 'Projects delivered' },
  { value: 6, suffix: '', label: 'States reached' },
]

export const PROJECTS = [
  { title: 'Rooftop PV Estate', category: 'Residential', size: '12 kWp', image: Pan5, location: 'Lagos', year: '2025'},
  { title: 'Commercial Rooftop Array', category: 'Commercial', size: '250 kWp', image: Pan2, location: 'Abuja', year: '2024' },
  { title: 'Clinic Off-Grid Microgrid', category: 'Institutional', size: '40 kWp + storage', image: Pan3, location: 'Kano', year: '2023' },
  { title: 'Solar Street Lighting', category: 'Public', size: '120 poles', image: Pan4, location: 'Enugu', year: '2022' },
  { title: 'Hybrid Inverter & Battery', category: 'Residential', size: '10 kWh', image: Inverter, location: 'Port Harcourt', year: '2021' },
  { title: 'Solar Water Pumping', category: 'Agricultural', size: '5 HP', image: Pan6, location: 'Ibadan', year: '2020' },
]

export const SKILLS = [
  'PV System Design',
  'Load & Yield Analysis',
  'Battery Storage',
  'Grid-Tie & Off-Grid',
  'Site Surveys',
  'Project Coordination',
]

export const QUALIFICATIONS = [
  { title: 'Higher Diploma in Electrical and Electronic Engineering', detail: 'Oko Federal Polytechnic · 2023' },
  { title: 'Certified PV Installer', detail: 'Dodawn Computronix limited' },
]

// export const TOOLS = ['PVsyst', 'AutoCAD', 'HelioScope', 'SketchUp', 'MATLAB', 'Excel']

export const CONTACT = {
  rows: [
    ["Phone", "+234 708 229 2120"],
    ["Email", "leolightinnovation@gmail.com"],
    // ['LinkedIn', 'linkedin.com/in/your-name'],
    ["Instagram", "@nwakonuchestanley"],
    ["TikTok", "leolight power innovation"],
  ],
  whatsapp: "https://wa.me/2347082292120",
};
