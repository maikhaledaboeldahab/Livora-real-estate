
import FilterForm from '../../components/FilterForm/FilterForm';
import PropertyCard from '../../components/propertyCard/PropertyCard';
import Navbar from "../../components/Sections/Navbar/Navbar"
import style from './PropertiesList.module.css';

// Pure layout data profile arrays - avoiding hooks entirely
const staticProperties = [
  { image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80', tag: 'Featured', title: 'The Obsidian Penthouse', location: 'Downtown Metropolis', price: '$12,500,000', beds: '4', baths: '5.5', size: '6k' },
  { image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80', tag: 'Exclusive', title: 'Azure Cliff Estate', location: 'Coastal Riviera', price: '$28,000,000', beds: '7', baths: '9', size: '12k' },
  { image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80', tag: 'Exclusive', title: 'Alpine Haven Chalet', location: 'Summit Valley', price: '$18,750,000', beds: '5', baths: '6', size: '8.5k' },
  { image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80', tag: '', title: 'Oasis Glass House', location: 'Desert Ridge', price: '$9,200,000', beds: '3', baths: '4.5', size: '4.2k' },
  { image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600&q=80', tag: 'Signature', title: 'Isle of Solitude', location: 'Private Archipelago', price: '$45,000,000', beds: '8', baths: '12', size: '20k' },
  { image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=600&q=80', tag: '', title: 'The Heritage Manor', location: 'Old Town Enclave', price: '$15,400,000', beds: '6', baths: '7.5', size: '10.5k' }
];

export default function PortfolioPage() {
  return (
    <div className={style.pageWrapper}>
      {/* 1. Cinematic Portfolio Hero Banner Header */}
      <Navbar></Navbar>
      <section className={style.heroSection}>
        <div className={style.heroOverlay}>
          <div className={style.container}>
            <h1 className={style.heroTitle}>Browse Our Exclusive Portfolio</h1>
            <div className={style.heroDivider}></div>
          </div>
        </div>
      </section>

      {/* 2. Portfolio Studio Body Area */}
      <section className={style.studioBody}>
        <div className={style.container}>
          <div className={style.layoutGrid}>
            
            {/* Left Hand: Search Controls Sidebar Column */}
            <div className={style.sidebarCol}>
              <FilterForm />
            </div>

            {/* Right Hand: Search Results Grid Column Context */}
            <div className={style.resultsCol}>
              {/* Primary Search Bar UI */}
              <div className={style.searchBarWrap}>
                <input 
                  type="text" 
                  className={style.searchInput} 
                  placeholder="Search by location, property name, or style..." 
                  readOnly 
                />
                <i className={`fa-solid fa-magnifying-glass ${style.searchIcon}`}></i>
              </div>

              {/* Filtering Controls Info Metadata Row */}
              <div className={style.controlsMetaBar}>
                <span className={style.propertiesCount}>
                  Showing <strong className={style.countHighlight}>24</strong> exclusive properties
                </span>
                <div className={style.sortingMenu}>
                  <span className={style.sortLabel}>Sort by:</span>
                  <div className={style.sortSelectTrigger}>
                    Featured <i className="fa-solid fa-chevron-down"></i>
                  </div>
                </div>
              </div>

              {/* Property Map Grid Loop Execution */}
              <div className={style.propertiesGrid}>
                {staticProperties.map((property, index) => (
                  <PropertyCard
                    key={index}
                    image={property.image}
                    tag={property.tag}
                    title={property.title}
                    location={property.location}
                    price={property.price}
                    beds={property.beds}
                    baths={property.baths}
                    size={property.size}
                  />
                ))}
              </div>

              {/* Pagination Section Trigger Footer */}
              <div className={style.paginationControlWrap}>
                <button type="button" className={style.loadMoreBtn}>
                  Load More Properties <i className="fa-solid fa-chevron-down"></i>
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}