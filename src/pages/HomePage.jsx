import HeroWrapper from "../components/UI/Herowrapper/HeroWrapper"
import ServiceSection from "../components/Sections/services/Services"
import ConsultSection from "../components/Sections/consultsection/ConsultSection"

export default function Home(){
    return(
        <>
            <HeroWrapper></HeroWrapper>
            <ServiceSection></ServiceSection>
            <ConsultSection></ConsultSection>
        </>
    )
}