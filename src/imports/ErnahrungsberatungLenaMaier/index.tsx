import svgPaths from "./svg-rf8dr8pybf";
import imgImageLenaMaier from "./d5d32fa9064166e615e6332edb6bc5c225bc6936.png";

function Container() {
  return <div className="absolute h-[813px] left-0 top-0 w-[1099px]" style={{ backgroundImage: "linear-gradient(6.95077deg, rgb(90, 80, 78) 11.765%, rgb(43, 38, 37) 89.412%)" }} data-name="Container" />;
}

function Paragraph() {
  return (
    <div className="absolute h-[24px] left-[149px] top-[-13px] w-[280px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Arsenal_SC:Regular',sans-serif] leading-[24px] left-[calc(50%-195px)] not-italic text-[16px] text-white top-0 whitespace-pre">{`individuell  •  alltagstauglich  •  wissenschaftlich fundiert`}</p>
    </div>
  );
}

function Hero1() {
  return (
    <div className="h-[52.5px] relative shrink-0 w-full" data-name="Hero">
      <p className="[word-break:break-word] absolute font-['Montserrat:Bold',sans-serif] leading-[52.5px] left-0 not-italic text-white top-[0.5px] tracking-[0.84px] uppercase whitespace-nowrap text-[42px]">Ernährungsberatung</p>
    </div>
  );
}

function Hero2() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Hero">
      <p className="[word-break:break-word] absolute font-['Arsenal_SC:Regular',sans-serif] leading-[28px] left-[141px] not-italic text-[28px] text-white top-[0.5px] tracking-[16.8px] uppercase whitespace-nowrap">Lena Maier</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[92.5px] items-start left-0 top-[43px] w-[280px]" data-name="Container">
      <Hero1 />
      <Hero2 />
    </div>
  );
}

function Hero3() {
  return (
    <div className="absolute h-[28px] left-[40px] top-[10px] w-[187.969px]" data-name="Hero">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Arsenal:Bold',sans-serif] leading-[28px] left-[82px] not-italic text-[18px] text-center text-white top-0 tracking-[0.36px] whitespace-nowrap">Kostenloses Erstgespräch</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[232px] size-[16px] top-[16.25px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33301 8H12.6663" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[-14px] p-[10px] top-[-10px]">
      <p className="[word-break:break-word] font-['Arsenal:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[18px] text-center text-white tracking-[0.36px] whitespace-nowrap">Leistungen entdecken</p>
    </div>
  );
}

function Hero4() {
  return (
    <div className="absolute h-[28px] left-[40px] top-[10px] w-[187.969px]" data-name="Hero">
      <Frame4 />
    </div>
  );
}

function Container1() {
  return (
    <div className="-translate-x-1/2 absolute h-[224px] left-1/2 top-[280px] w-[577px]" data-name="Container">
      <Paragraph />
      <Container2 />
      <div className="absolute h-[48px] left-[3px] overflow-clip rounded-[16777200px] top-[231.5px] w-[268px]" data-name="Button_1">
        <div aria-hidden className="absolute bg-[rgba(201,166,107,0.3)] inset-0 pointer-events-none rounded-[16777200px]" />
        <Hero3 />
        <Icon />
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_2px_0px_rgba(255,255,255,0.5),inset_0px_-1px_2px_0px_rgba(0,0,0,0.1)]" />
      </div>
      <div className="absolute h-[48px] left-[293px] overflow-clip rounded-[16777200px] top-[231.75px] w-[244px]" data-name="Button_2">
        <div aria-hidden className="absolute bg-[rgba(201,166,107,0.3)] inset-0 pointer-events-none rounded-[16777200px]" />
        <Hero4 />
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_2px_0px_rgba(255,255,255,0.5),inset_0px_-1px_2px_0px_rgba(0,0,0,0.1)]" />
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="h-[813px] overflow-clip relative shrink-0 w-full" data-name="Hero">
      <Container />
      <Container1 />
    </div>
  );
}

function Container3() {
  return <div className="absolute h-[526px] left-0 top-0 w-[448px]" data-name="Container" />;
}

function ImageLenaMaier() {
  return (
    <div className="absolute h-[577px] left-[17.5px] top-[-26px] w-[430px]" data-name="Image (Lena Maier)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageLenaMaier} />
    </div>
  );
}

function Hey() {
  return (
    <div className="absolute bg-[#282423] h-[526px] left-[69.5px] rounded-[24px] top-[112px] w-[448px]" data-name="hey">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container3 />
        <ImageLenaMaier />
      </div>
      <div aria-hidden className="absolute border-[#ffe5c5] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[24.5px] shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function About1() {
  return (
    <div className="h-[54px] relative shrink-0 w-full" data-name="About">
      <p className="[word-break:break-word] absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[54px] left-0 text-[#f4f4f4] text-[36px] top-0 whitespace-nowrap">Hey, ich bin Lena</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[112px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="[word-break:break-word] absolute font-['Arsenal:Regular',sans-serif] h-[447px] leading-[0] left-[0.5px] not-italic text-[#f4f4f4] text-[18px] top-0 w-[430px] whitespace-pre-wrap">
        <p className="leading-[28px] mb-0">Zertifizierte Ernährungsberaterin mit Fokus auf alltagstaugliche Ernährung die Dich an Dein Ziel bringt.</p>
        <p className="leading-[28px] mb-0">​</p>
        <p className="leading-[28px] mb-0">Ich arbeite in der persönlichen Ernährungsberatung sowie in Vorträgen und Workshops mit Schulen, Vereinen und Unternehmen. Weil Ernährung nicht nur privat, sondern auch im Arbeitsleben eine große Rolle spielt.</p>
        <p className="leading-[28px] mb-0">Mein Ansatz ist klar: weniger Regeln, mehr Verständnis – und Entscheidungen, die im echten Leben funktionieren.</p>
        <p className="leading-[28px] mb-0">​</p>
        <p className="leading-[28px] mb-0">Ernährung muss nicht perfekt sein, sondern machbar. Und genau dort setze ich an.</p>
        <p className="leading-[28px] mb-0">​</p>
        <p className="leading-[28px]">Denn am Ende geht es uns doch allen um dasselbe: gesund alt werden und uns im Alltag gut fühlen.</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return <div className="h-[64px] relative shrink-0 w-full" data-name="Paragraph" />;
}

function About2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[448px] items-start relative shrink-0 w-full" data-name="About">
      <Paragraph1 />
      <Paragraph2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[526px] items-start left-[581.5px] top-[112px] w-[448px]" data-name="Container">
      <About1 />
      <About2 />
    </div>
  );
}

function About() {
  return (
    <div className="h-[750px] relative shrink-0 w-full" style={{ backgroundImage: "linear-gradient(186.417deg, rgb(90, 80, 78) 12.157%, rgb(43, 38, 37) 89.804%)" }} data-name="About">
      <Hey />
      <Container4 />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[48px] left-[128px] top-0 w-[768px]" data-name="Heading 2">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[48px] left-[383.8px] text-[#f4f4f4] text-center top-[0.5px] whitespace-nowrap text-[42px]">Meine Philosophie</p>
    </div>
  );
}

function Philosophy1() {
  return (
    <div className="h-[57px] relative shrink-0 w-full" data-name="Philosophy">
      <p className="[word-break:break-word] absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[32px] left-[-0.5px] text-[#f4f4f4] text-[24px] top-0 w-[388px]">Verstehen statt planlos machen</p>
    </div>
  );
}

function Philosophy2() {
  return (
    <div className="h-[78px] relative shrink-0 w-full" data-name="Philosophy">
      <p className="[word-break:break-word] absolute font-['Arsenal:Regular',sans-serif] leading-[26px] left-0 not-italic text-[#f4f4f4] text-[16px] top-[-1px] w-[355px]">Ich will nicht, dass du blind irgendwas befolgst. Du sollst verstehen, wie Ernährung funktioniert, damit du selbst gute Entscheidungen treffen kannst.</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[206px] items-start pt-[30px] px-[40px] relative rounded-[24px] shrink-0 w-[460px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(75, 67, 65, 0.8) 0%, rgba(75, 67, 65, 0.8) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)" }} data-name="Container">
      <div aria-hidden className="absolute border border-[#c9a66b] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Philosophy1 />
      <Philosophy2 />
    </div>
  );
}

function Philosophy3() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Philosophy">
      <div className="[word-break:break-word] absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[0] left-0 text-[#f4f4f4] text-[24px] top-[-0.5px] whitespace-nowrap">
        <p className="leading-[28px] mb-0 whitespace-pre">{`Es sind die kleinen `}</p>
        <p className="leading-[28px] whitespace-pre">Entscheidungen</p>
      </div>
    </div>
  );
}

function Philosophy4() {
  return (
    <div className="h-[78px] relative shrink-0 w-full" data-name="Philosophy">
      <p className="[word-break:break-word] absolute font-['Arsenal:Regular',sans-serif] leading-[26px] left-[-0.5px] not-italic text-[#f4f4f4] text-[16px] top-[-4px] w-[380px]">{`Nicht der perfekte Plan macht den Unterschied, sondern das, was du jeden Tag machst. `}</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[206px] items-start pt-[30px] px-[40px] relative rounded-[24px] shrink-0 w-[460px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(75, 67, 65, 0.8) 0%, rgba(75, 67, 65, 0.8) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)" }} data-name="Container">
      <div aria-hidden className="absolute border border-[#c9a66b] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Philosophy3 />
      <Philosophy4 />
    </div>
  );
}

function Philosophy5() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Philosophy">
      <p className="[word-break:break-word] absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[32px] left-0 text-[#f4f4f4] text-[24px] top-[-0.5px] whitespace-nowrap">Diäten funktionieren nicht...</p>
    </div>
  );
}

function Philosophy6() {
  return (
    <div className="h-[78px] relative shrink-0 w-full" data-name="Philosophy">
      <p className="[word-break:break-word] absolute font-['Arsenal:Regular',sans-serif] leading-[26px] left-0 not-italic text-[#f4f4f4] text-[16px] top-[-1px] w-[355px]">...auf Dauer. Es geht darum, etwas zu verändern, das auch in Zukunft funktioniert. Deshalb:</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[206px] items-start pt-[30px] px-[40px] relative rounded-[24px] shrink-0 w-[460px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(75, 67, 65, 0.8) 0%, rgba(75, 67, 65, 0.8) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)" }} data-name="Container">
      <div aria-hidden className="absolute border border-[#c9a66b] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Philosophy5 />
      <Philosophy6 />
    </div>
  );
}

function Philosophy7() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Philosophy">
      <p className="[word-break:break-word] absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[32px] left-0 text-[#f4f4f4] text-[24px] top-[-0.5px] whitespace-nowrap">Keine Verbote</p>
    </div>
  );
}

function Philosophy8() {
  return (
    <div className="h-[78px] relative shrink-0 w-full" data-name="Philosophy">
      <p className="[word-break:break-word] absolute font-['Arsenal:Regular',sans-serif] leading-[26px] left-0 not-italic text-[#f4f4f4] text-[16px] top-[-1px] w-[355px]">Du musst nichts komplett streichen. Es geht nicht um „gut“ oder „schlecht“, sondern darum, bessere Entscheidungen zu treffen.</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[206px] items-start pt-[30px] px-[40px] relative rounded-[24px] shrink-0 w-[460px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(75, 67, 65, 0.8) 0%, rgba(75, 67, 65, 0.8) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)" }} data-name="Container">
      <div aria-hidden className="absolute border border-[#c9a66b] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Philosophy7 />
      <Philosophy8 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-start flex flex-wrap gap-[40px] items-start left-0 top-0 w-[960px]">
      <Container7 />
      <Container8 />
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[452px] left-[32px] top-[112px] w-[960px]" data-name="Container">
      <Frame2 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[97.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Arsenal:Italic',sans-serif] italic leading-[48.75px] left-[400.2px] text-[#f4f4f4] text-[30px] text-center top-[-0.5px] w-[637px]">{`"Deine Ernährung muss sich an dein Leben anpassen, nicht andersrum”`}</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Arsenal:Regular',sans-serif] leading-[24px] left-[399.76px] not-italic text-[#f4f4f4] text-[16px] text-center top-[-1px] whitespace-nowrap">— Lena Maier</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[233.5px] items-start left-[64px] pt-[48px] px-[48px] rounded-[24px] top-[644px] w-[896px]" data-name="Container">
      <Paragraph3 />
      <Paragraph4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[877.5px] left-[37.5px] top-[112px] w-[1024px]" data-name="Container">
      <Heading />
      <Container6 />
      <Container11 />
    </div>
  );
}

function Philosophy() {
  return (
    <div className="h-[1038px] overflow-clip relative shrink-0 w-full" style={{ backgroundImage: "linear-gradient(8.84721deg, rgb(90, 80, 78) 11.765%, rgb(43, 38, 37) 89.412%)" }} data-name="Philosophy">
      <Container5 />
    </div>
  );
}

function Services1() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Services">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[48px] left-[384.95px] text-[#f4f4f4] text-center top-[0.5px] whitespace-nowrap text-[42px]">Meine Leistungen</p>
    </div>
  );
}

function Services2() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Services">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Arsenal:Regular',sans-serif] leading-[28px] left-[384px] not-italic text-[#f4f4f4] text-[20px] text-center top-[-0.5px] w-[815px]">Einzelberatung und Gruppenvorträge für eine Ernährung, die im Alltag und im Arbeitsleben funktioniert</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[120px] items-start left-[165.5px] top-[112px] w-[768px]" data-name="Container">
      <Services1 />
      <Services2 />
    </div>
  );
}

function Services3() {
  return (
    <div className="absolute h-[36px] left-[39px] rounded-[16777200px] top-[39px] w-[165.703px]" data-name="Services">
      <p className="[word-break:break-word] absolute bg-clip-text font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[-0.5px] not-italic text-[14px] text-[transparent] top-[7px] tracking-[0.35px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(181.612deg, rgb(255, 229, 197) 2.5754%, rgb(226, 181, 120) 94.43%)" }}>
        Für Privatpersonen
      </p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="flex-[1_0_0] h-[80px] min-w-px relative" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Montserrat:Medium',sans-serif] leading-[40px] left-0 not-italic text-[#f4f4f4] text-[36px] top-0 w-[223px]">Persönliche Beratung</p>
      </div>
    </div>
  );
}

function Services4() {
  return (
    <div className="absolute content-stretch flex h-[88px] items-start left-[38.5px] top-[99px] w-[376px]" data-name="Services">
      <Heading1 />
    </div>
  );
}

function Services5() {
  return (
    <div className="absolute h-[112px] left-[39px] top-[211px] w-[376px]" data-name="Services">
      <p className="[word-break:break-word] absolute font-['Arsenal:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#f4f4f4] text-[18px] top-0 w-[353px]">Individuell auf dich abgestimmt. Wir entwickeln gemeinsam einen Plan, der zu deinem Leben, deinen Zielen und deinen Vorlieben passt.</p>
    </div>
  );
}

function MaterialSymbolsPersonOutlineRounded() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="material-symbols:person-outline-rounded">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="material-symbols:person-outline-rounded">
          <path d={svgPaths.p21ee8580} fill="var(--fill-0, #C9A961)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[rgba(201,169,97,0.1)] relative rounded-[14px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <MaterialSymbolsPersonOutlineRounded />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="[word-break:break-word] absolute font-['Arsenal:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#f4f4f4] text-[18px] top-0 whitespace-nowrap">Individuelle Ernährungsberatung</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Arsenal:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#f4f4f4] text-[16px] top-[-1px] whitespace-nowrap">Persönliche Betreuung, die genau zu dir passt</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="flex-[1_0_0] h-[56px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading2 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[24px] h-[80px] items-start relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Container17 />
    </div>
  );
}

function UilWeight() {
  return (
    <div className="relative shrink-0 size-[23px]" data-name="uil:weight">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g id="uil:weight">
          <path d={svgPaths.p16288100} fill="var(--fill-0, #C9A961)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[rgba(201,169,97,0.1)] relative rounded-[14px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <UilWeight />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="[word-break:break-word] absolute font-['Arsenal:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#f4f4f4] text-[18px] top-0 whitespace-nowrap">Nachhaltiger Fettverlust</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Arsenal:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#f4f4f4] text-[16px] top-[-1px] w-[349px]">Ohne Jojo-Effekt und Extremdiäten zu deinem Wohlfühlgewicht</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="flex-[1_0_0] h-[80px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading3 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[24px] h-[80px] items-start relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Group() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Group">
      <div className="absolute inset-[-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="Group">
            <path d={svgPaths.p7384dc0} id="Vector" stroke="var(--stroke-0, #C9A961)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M10 5V10L13 13" id="Vector_2" stroke="var(--stroke-0, #C9A961)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-[rgba(201,169,97,0.1)] relative rounded-[14px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Group />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="[word-break:break-word] absolute font-['Arsenal:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#f4f4f4] text-[18px] top-0 whitespace-nowrap">Langfristige Begleitung</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Arsenal:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#f4f4f4] text-[16px] top-[-1px] whitespace-nowrap">Kontinuierliche Unterstützung auf deinem Weg</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="flex-[1_0_0] h-[56px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading4 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[24px] h-[80px] items-start relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Container23 />
    </div>
  );
}

function Services6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[288px] items-start left-[39px] top-[355px] w-[376px]" data-name="Services">
      <Container15 />
      <Container18 />
      <Container21 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute border border-[#ffe5c5] border-solid h-[716px] left-0 rounded-[24px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] top-0 w-[456px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(75, 67, 65, 0.8) 0%, rgba(75, 67, 65, 0.8) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)" }} data-name="Container">
      <Services3 />
      <Services4 />
      <Services5 />
      <Services6 />
    </div>
  );
}

function Services7() {
  return (
    <div className="absolute h-[36px] left-[39px] rounded-[16777200px] top-[39px] w-[165.391px]" data-name="Services">
      <p className="[word-break:break-word] absolute bg-clip-text font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[-0.5px] not-italic text-[14px] text-[transparent] top-[7px] tracking-[0.35px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(181.612deg, rgb(255, 229, 197) 2.5754%, rgb(226, 181, 120) 94.43%)" }}>
        Für Organisationen
      </p>
    </div>
  );
}

function Heading5() {
  return (
    <div className="flex-[1_0_0] h-[80px] min-w-px relative" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Montserrat:Medium',sans-serif] leading-[40px] left-0 not-italic text-[#f4f4f4] text-[36px] top-0 w-[214px]">{`Vorträge & Workshops`}</p>
      </div>
    </div>
  );
}

function Services8() {
  return (
    <div className="absolute content-stretch flex h-[88px] items-start left-[38.5px] top-[99px] w-[376px]" data-name="Services">
      <Heading5 />
    </div>
  );
}

function Services9() {
  return (
    <div className="absolute h-[112px] left-[39px] top-[211px] w-[376px]" data-name="Services">
      <p className="[word-break:break-word] absolute font-['Arsenal:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#f4f4f4] text-[18px] top-0 w-[356px]">Fundiertes Ernährungswissen für Vereine, Schulen und Unternehmen. Praxisnah, wissenschaftlich fundiert und sofort anwendbar.</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_585)" id="Icon">
          <path d={svgPaths.p37143280} id="Vector" stroke="var(--stroke-0, #C9A961)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pff91a00} id="Vector_2" stroke="var(--stroke-0, #C9A961)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2b722f80} id="Vector_3" stroke="var(--stroke-0, #C9A961)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33301 5H11.6663" id="Vector_4" stroke="var(--stroke-0, #C9A961)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33301 8.33325H11.6663" id="Vector_5" stroke="var(--stroke-0, #C9A961)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33301 11.6667H11.6663" id="Vector_6" stroke="var(--stroke-0, #C9A961)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33301 15H11.6663" id="Vector_7" stroke="var(--stroke-0, #C9A961)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1_585">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-[rgba(201,169,97,0.1)] relative rounded-[14px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="[word-break:break-word] absolute font-['Arsenal:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#f4f4f4] text-[18px] top-0 whitespace-nowrap">Für Unternehmen</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Arsenal:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#f4f4f4] text-[16px] top-[-1px] w-[312px]">Gesunde Ernährung am Arbeitsplatz – für mehr Energie und Leistungsfähigkeit</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="flex-[1_0_0] h-[80px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading6 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex gap-[24px] h-[80px] items-start relative shrink-0 w-full" data-name="Container">
      <Container26 />
      <Container27 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p31df5980} id="Vector" stroke="var(--stroke-0, #C9A961)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M18.333 8.33325V13.3333" id="Vector_2" stroke="var(--stroke-0, #C9A961)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1ead9c00} id="Vector_3" stroke="var(--stroke-0, #C9A961)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-[rgba(201,169,97,0.1)] relative rounded-[14px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="[word-break:break-word] absolute font-['Arsenal:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#f4f4f4] text-[18px] top-0 whitespace-nowrap">Für Schulen</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Arsenal:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#f4f4f4] text-[16px] top-[-1px] w-[310px]">Altersgerechte Vermittlung von Ernährungswissen für Schüler und Eltern</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="flex-[1_0_0] h-[80px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading7 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex gap-[24px] h-[80px] items-start relative shrink-0 w-full" data-name="Container">
      <Container29 />
      <Container30 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_498)" id="Icon">
          <path d={svgPaths.p11a8ff80} id="Vector" stroke="var(--stroke-0, #C9A961)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p312978e0} id="Vector_2" stroke="var(--stroke-0, #C9A961)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M3.33301 18.3333H16.6663" id="Vector_3" stroke="var(--stroke-0, #C9A961)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2862e480} id="Vector_4" stroke="var(--stroke-0, #C9A961)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3d12b060} id="Vector_5" stroke="var(--stroke-0, #C9A961)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p31ca8d80} id="Vector_6" stroke="var(--stroke-0, #C9A961)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1_498">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-[rgba(201,169,97,0.1)] relative rounded-[14px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="[word-break:break-word] absolute font-['Arsenal:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#f4f4f4] text-[18px] top-0 whitespace-nowrap">Für Vereine</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Arsenal:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#f4f4f4] text-[16px] top-[-1px] w-[287px]">Sportgerechte Ernährung für optimale Performance und Regeneration</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="flex-[1_0_0] h-[80px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading8 />
        <Paragraph10 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[24px] h-[80px] items-start relative shrink-0 w-full" data-name="Container">
      <Container32 />
      <Container33 />
    </div>
  );
}

function Services10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[288px] items-start left-[39px] top-[355px] w-[376px]" data-name="Services">
      <Container25 />
      <Container28 />
      <Container31 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute border border-[#ffe5c5] border-solid h-[716px] left-[504px] rounded-[24px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] top-0 w-[456px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(75, 67, 65, 0.8) 0%, rgba(75, 67, 65, 0.8) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)" }} data-name="Container">
      <Services7 />
      <Services8 />
      <Services9 />
      <Services10 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[716px] left-[69.5px] top-[296px] w-[960px]" data-name="Container">
      <Container14 />
      <Container24 />
    </div>
  );
}

function Services() {
  return (
    <div className="h-[1188px] relative shrink-0 w-full" style={{ backgroundImage: "linear-gradient(190.101deg, rgb(90, 80, 78) 12.157%, rgb(43, 38, 37) 89.804%)" }} data-name="Services">
      <Container12 />
      <Container13 />
    </div>
  );
}

function WhyItWorks1() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="WhyItWorks">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[48px] left-[383.83px] text-[#f4f4f4] text-center top-[0.5px] whitespace-nowrap text-[42px]">Was dich erwartet</p>
    </div>
  );
}

function WhyItWorks2() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="WhyItWorks">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Arsenal:Regular',sans-serif] leading-[28px] left-[383.95px] not-italic text-[#f4f4f4] text-[20px] text-center top-[-0.5px] whitespace-nowrap">Ein ganzheitlicher Ansatz für nachhaltige Veränderung</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[100px] items-start left-[128px] top-0 w-[768px]" data-name="Container">
      <WhyItWorks1 />
      <WhyItWorks2 />
    </div>
  );
}

function Philosophy9() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Philosophy">
      <p className="[word-break:break-word] absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[32px] left-0 text-[#f4f4f4] text-[24px] top-[-0.5px] whitespace-nowrap">Individuelle Anpassung</p>
    </div>
  );
}

function Philosophy10() {
  return (
    <div className="h-[78px] relative shrink-0 w-full" data-name="Philosophy">
      <p className="[word-break:break-word] absolute font-['Arsenal:Regular',sans-serif] leading-[26px] left-0 not-italic text-[#f4f4f4] text-[16px] top-[-1px] w-[355px]">Dein Plan passt sich deinem Leben an – nicht umgekehrt. Wir berücksichtigen deine Vorlieben, deinen Alltag und deine Ziele.</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[206px] items-start left-0 pt-[30px] px-[40px] rounded-[24px] top-0 w-[460px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(75, 67, 65, 0.8) 0%, rgba(75, 67, 65, 0.8) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)" }} data-name="Container">
      <div aria-hidden className="absolute border border-[#c9a66b] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Philosophy9 />
      <Philosophy10 />
    </div>
  );
}

function Philosophy11() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Philosophy">
      <p className="[word-break:break-word] absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[32px] left-0 text-[#f4f4f4] text-[24px] top-[-0.5px] whitespace-nowrap">Langfristige Perspektive</p>
    </div>
  );
}

function Philosophy12() {
  return (
    <div className="h-[78px] relative shrink-0 w-full" data-name="Philosophy">
      <p className="[word-break:break-word] absolute font-['Arsenal:Regular',sans-serif] leading-[26px] left-0 not-italic text-[#f4f4f4] text-[16px] top-[-1px] w-[355px]">Keine Crash-Diäten. Wir arbeiten an nachhaltigen Veränderungen, die ein Leben lang halten.</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[206px] items-start left-[500px] pt-[30px] px-[40px] rounded-[24px] top-0 w-[460px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(75, 67, 65, 0.8) 0%, rgba(75, 67, 65, 0.8) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)" }} data-name="Container">
      <div aria-hidden className="absolute border border-[#c9a66b] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Philosophy11 />
      <Philosophy12 />
    </div>
  );
}

function Philosophy13() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Philosophy">
      <p className="[word-break:break-word] absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[32px] left-0 text-[#f4f4f4] text-[24px] top-[-0.5px] whitespace-nowrap">Persönliche Begleitung</p>
    </div>
  );
}

function Philosophy14() {
  return (
    <div className="h-[78px] relative shrink-0 w-full" data-name="Philosophy">
      <p className="[word-break:break-word] absolute font-['Arsenal:Regular',sans-serif] leading-[26px] left-0 not-italic text-[#f4f4f4] text-[16px] top-[-1px] w-[355px]">Du bist nicht allein. Ich begleite dich Schritt für Schritt und bin bei Fragen und Herausforderungen für dich da.</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[206px] items-start left-0 pt-[30px] px-[40px] rounded-[24px] top-[246px] w-[460px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(75, 67, 65, 0.8) 0%, rgba(75, 67, 65, 0.8) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)" }} data-name="Container">
      <div aria-hidden className="absolute border border-[#c9a66b] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Philosophy13 />
      <Philosophy14 />
    </div>
  );
}

function Philosophy15() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Philosophy">
      <p className="[word-break:break-word] absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[32px] left-0 text-[#f4f4f4] text-[24px] top-[-0.5px] whitespace-nowrap">Ohne Verzicht</p>
    </div>
  );
}

function Philosophy16() {
  return (
    <div className="h-[78px] relative shrink-0 w-full" data-name="Philosophy">
      <p className="[word-break:break-word] absolute font-['Arsenal:Regular',sans-serif] leading-[26px] left-0 not-italic text-[#f4f4f4] text-[16px] top-[-1px] w-[355px]">Essen soll Freude machen. Wir finden Wege, wie du genießen und gleichzeitig deine Ziele erreichen kannst.</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[206px] items-start left-[500px] pt-[30px] px-[40px] rounded-[24px] top-[246px] w-[460px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(75, 67, 65, 0.8) 0%, rgba(75, 67, 65, 0.8) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)" }} data-name="Container">
      <div aria-hidden className="absolute border border-[#c9a66b] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Philosophy15 />
      <Philosophy16 />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute h-[452px] left-[32px] top-[164px] w-[960px]" data-name="Container">
      <Container37 />
      <Container38 />
      <Container39 />
      <Container40 />
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[793.5px] relative shrink-0 w-full" data-name="Container">
      <Container35 />
      <Container36 />
    </div>
  );
}

function WhyItWorks() {
  return (
    <div className="h-[801px] relative shrink-0 w-full" style={{ backgroundImage: "linear-gradient(6.84916deg, rgb(90, 80, 78) 11.765%, rgb(43, 38, 37) 89.412%)" }} data-name="WhyItWorks">
      <div className="content-stretch flex flex-col items-start pt-[28px] px-[37.5px] relative size-full">
        <Container34 />
      </div>
    </div>
  );
}

function Container41() {
  return <div className="absolute h-[973px] left-0 top-[-0.5px] w-[1099px]" style={{ backgroundImage: "linear-gradient(188.301deg, rgb(90, 80, 78) 12.157%, rgb(43, 38, 37) 89.804%)" }} data-name="Container" />;
}

function Contact1() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[896px]" data-name="Contact">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Montserrat:Bold',sans-serif] leading-[48px] left-[447.63px] not-italic text-[#f4f4f4] text-center top-[0.5px] whitespace-nowrap text-[42px]">{`Ich freue mich von dir zu hören! `}</p>
    </div>
  );
}

function Contact2() {
  return (
    <div className="absolute h-[56px] left-[112px] top-[64px] w-[672px]" data-name="Contact">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Arsenal:Regular',sans-serif] leading-[28px] left-[336.45px] not-italic text-[#f4f4f4] text-[20px] text-center top-[-0.5px] w-[584px]">Ganz unverbindlich und kostenlos.</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute h-[120px] left-0 top-0 w-[896px]" data-name="Container">
      <Contact1 />
      <Contact2 />
    </div>
  );
}

function Container45() {
  return <div className="absolute h-[56px] left-0 top-0 w-[798px]" data-name="Container" />;
}

function Heading9() {
  return (
    <div className="absolute h-[36px] left-0 top-[72px] w-[798px]" data-name="Heading 3">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Montserrat:Medium',sans-serif] leading-[36px] left-[399.68px] not-italic text-[#f4f4f4] text-[30px] text-center top-[-0.5px] whitespace-nowrap">Am liebsten per WhatsApp</p>
    </div>
  );
}

function Hero5() {
  return <div className="-translate-x-1/2 absolute h-[28px] left-[calc(50%-0.02px)] top-[10px] w-[187.969px]" data-name="Hero" />;
}

function MaskGroup() {
  return (
    <div className="absolute inset-[8.33%_8.33%_9.01%_8.68%]" data-name="Mask group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.916 19.8382">
        <g id="Mask group">
          <mask height="20" id="mask0_1_525" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="20" x="0" y="0">
            <g id="Group">
              <path clipRule="evenodd" d={svgPaths.p6657e40} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
            </g>
          </mask>
          <g mask="url(#mask0_1_525)">
            <path clipRule="evenodd" d={svgPaths.p6657e40} fill="url(#paint0_linear_1_525)" fillRule="evenodd" id="Vector_2" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_525" x1="0" x2="19.916" y1="9.91908" y2="9.91908">
            <stop stopColor="#C9A66B" />
            <stop offset="1" stopColor="#C9A66B" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function BasilWhatsappSolid() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="basil:whatsapp-solid">
      <MaskGroup />
    </div>
  );
}

function Frame5() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[16px] items-center left-[calc(50%-0.5px)] top-[10px]">
      <BasilWhatsappSolid />
      <p className="[word-break:break-word] font-['Arsenal:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[18px] text-center text-white tracking-[0.36px] whitespace-nowrap">Jetzt per Whatsapp kontaktieren</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="-translate-x-1/2 absolute h-[48px] left-[calc(50%+25px)] overflow-clip rounded-[16777200px] top-px w-[386px]" data-name="Button_1">
      <div aria-hidden className="absolute bg-[rgba(201,166,107,0.3)] inset-0 pointer-events-none rounded-[16777200px]" />
      <Hero5 />
      <Frame5 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_2px_0px_rgba(255,255,255,0.5),inset_0px_-1px_2px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute h-[48px] left-0 top-[137px] w-[798px]" data-name="Container">
      <Button1 />
    </div>
  );
}

function Contact3() {
  return (
    <div className="h-[220px] relative shrink-0 w-full" data-name="Contact">
      <div aria-hidden className="absolute border-[rgba(44,44,44,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <Container45 />
      <Heading9 />
      <Container46 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[2.38%_-2.08%_2.39%_-2.09%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 19.9995">
        <g id="Group">
          <path d={svgPaths.p399b4b80} fill="url(#paint0_linear_1_506)" id="Vector" />
          <path d={svgPaths.p37429e00} fill="url(#paint1_linear_1_506)" id="Vector_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_506" x1="0" x2="25" y1="12.2089" y2="12.2089">
            <stop stopColor="#C9A66B" />
            <stop offset="1" stopColor="#C9A66B" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_506" x1="0.557812" x2="24.4453" y1="4.87313" y2="4.87313">
            <stop stopColor="#C9A66B" />
            <stop offset="1" stopColor="#C9A66B" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function TablerMailFilled() {
  return (
    <div className="h-[21px] relative shrink-0 w-[24px]" data-name="tabler:mail-filled">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group1 />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="bg-[rgba(201,169,97,0.1)] relative rounded-[16777200px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] relative size-full">
        <TablerMailFilled />
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Montserrat:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#f4f4f4] text-[14px] top-[0.5px] whitespace-nowrap">E-Mail</p>
    </div>
  );
}

function Link() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] absolute font-['Arsenal:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#f4f4f4] text-[16px] top-[-1px] whitespace-nowrap">kontakt@lenamaier-ernaehrung.de</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="flex-[640_0_0] h-[46px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Paragraph11 />
        <Link />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="flex-[704_0_0] h-[48px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container48 />
        <Container49 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[33.33%_8.33%_8.33%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
            <path d={svgPaths.pebf4900} id="Vector" stroke="var(--stroke-0, #F4F4F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_33.33%_33.33%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
            <path d={svgPaths.p14e01180} id="Vector" stroke="var(--stroke-0, #F4F4F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[44px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] px-[12px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Contact4() {
  return (
    <div className="bg-[#4b4341] content-stretch flex h-[90px] items-center justify-between px-[20px] relative rounded-[14px] shrink-0 w-[798px]" data-name="Contact">
      <Container47 />
      <Button />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="[word-break:break-word] font-['Arsenal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f4f4f4] text-[14px] text-center w-[798px]">Ich melde mich in der Regel innerhalb von 24 Stunden bei dir zurück.</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-start pb-[45px] pt-[36px] relative shrink-0">
      <Contact4 />
      <Frame1 />
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute bg-[#282423] content-stretch drop-shadow-[0px_2px_2px_rgba(0,0,0,0.1)] flex flex-col h-[500px] items-start left-[-0.5px] pb-px px-[49px] rounded-[24px] top-[168.5px] w-[896px]" data-name="Container">
      <div aria-hidden className="absolute border-2 border-[#4b4341] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Contact3 />
      <Frame />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute h-[780px] left-[101.5px] top-[112px] w-[896px]" data-name="Container">
      <Container43 />
      <Container44 />
    </div>
  );
}

function Contact() {
  return (
    <div className="bg-white h-[985px] overflow-clip relative shrink-0 w-full" data-name="Contact">
      <Container41 />
      <Container42 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="content-stretch flex flex-col h-[5563px] items-start relative shrink-0 w-full" data-name="Main Content">
      <Hero />
      <About />
      <Philosophy />
      <Services />
      <WhyItWorks />
      <Contact />
    </div>
  );
}

function Heading10() {
  return (
    <div className="[word-break:break-word] h-[58.734px] leading-[28.919px] relative shrink-0 text-[#f4f4f4] text-[20.656px] w-full whitespace-nowrap" data-name="Heading 3">
      <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold left-0 top-[-0.52px] font-[Montserrat]">Ernährungsberatung</p>
      <p className="absolute font-['Arsenal_SC:Regular',sans-serif] left-0 not-italic top-[28.59px] tracking-[7.6429px]">Lena Maier</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute content-stretch flex flex-col h-[52px] items-start left-[0.42px] top-[-3.14px] w-[300px]" data-name="Container">
      <Heading10 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[16.633px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] absolute font-['Montserrat:Bold',sans-serif] leading-[16.525px] left-0 not-italic text-[#f4f4f4] text-[13px] top-px tracking-[3.0985px] uppercase w-[140px]">Rechtliches</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[20.791px] relative shrink-0 w-[213.181px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Arsenal:Regular',sans-serif] leading-[20.656px] left-0 not-italic text-[#f4f4f4] text-[15px] top-[0.52px] tracking-[-0.1553px] whitespace-nowrap">Impressum</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[20.791px] relative shrink-0 w-[213.181px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Arsenal:Regular',sans-serif] leading-[20.656px] left-0 not-italic text-[#f4f4f4] text-[15px] top-[0.52px] tracking-[-0.1553px] whitespace-nowrap">Datenschutz</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[213.181px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Arsenal:Regular',sans-serif] leading-[20.656px] left-0 not-italic text-[#f4f4f4] text-[15px] top-[0.52px] tracking-[-0.1553px] whitespace-nowrap">AGB</p>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex flex-col gap-[8.263px] h-[79.006px] items-start relative shrink-0 w-full" data-name="Navigation">
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16.525px] h-[125px] items-end left-[854.42px] top-[-0.14px] w-[146px]" data-name="Container">
      <Heading11 />
      <Navigation />
    </div>
  );
}

function Heading12() {
  return (
    <div className="h-[16.633px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] absolute font-['Montserrat:Bold',sans-serif] leading-[16.525px] left-0 not-italic text-[#f4f4f4] text-[13px] top-[1.04px] tracking-[3.0985px] uppercase whitespace-nowrap">Kontakt</p>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[20.791px] relative shrink-0 w-[213.181px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Arsenal_SC:Regular',sans-serif] leading-[20.656px] left-0 not-italic text-[#f4f4f4] text-[15px] top-[0.52px] tracking-[-0.1553px] whitespace-nowrap">kontakt@lenamaier-ernaehrung.de</p>
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[213.181px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Arsenal:Regular',sans-serif] leading-[20.656px] left-0 not-italic text-[#f4f4f4] text-[15px] top-[0.52px] tracking-[-0.1553px] whitespace-nowrap">Alfdorf, Deutschland</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col gap-[8.263px] h-[49.898px] items-start relative shrink-0 w-full" data-name="Container">
      <Link4 />
      <Paragraph12 />
    </div>
  );
}

function Container56() {
  return <div className="h-[24.949px] relative shrink-0 w-full" data-name="Container" />;
}

function Container54() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16.525px] h-[124.746px] items-start left-[397.42px] top-[0.86px] w-[223.699px]" data-name="Container">
      <Heading12 />
      <Container55 />
      <Container56 />
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[125px] relative shrink-0 w-[1018px]" data-name="Container">
      <Container52 />
      <Container53 />
      <Container54 />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute h-[24.949px] left-[327.34px] top-[17.67px] w-[346.837px]" data-name="Paragraph">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Arsenal_SC:Regular',sans-serif] leading-[0] left-[173.42px] not-italic text-[#f4f4f4] text-[15px] text-center top-0 tracking-[-0.3228px] w-[346.837px]">
        <span className="leading-[24.788px]">©</span>
        <span className="font-['Arsenal:Regular',sans-serif] leading-[24.788px]">{` 2026 Lena Maier. Alle Rechte vorbehalten.`}</span>
      </p>
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[59.254px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f4f4f4] border-solid border-t-[1.033px] inset-0 pointer-events-none" />
      <Paragraph13 />
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[49.576px] h-[366.96px] items-start left-0 pt-[66.101px] px-[49.576px] top-[1.04px] w-[1099px]" data-name="Container">
      <Container51 />
      <Container57 />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[20.791px] left-0 top-0 w-[85.956px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Arsenal:Regular',sans-serif] leading-[20.656px] left-[4px] not-italic text-[#f4f4f4] text-[15px] top-[0.52px] whitespace-nowrap">Gemacht mit</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute h-[16.633px] left-[87.31px] top-[3.53px] w-[16.418px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.4183 16.6328">
        <g id="Icon">
          <path d={svgPaths.p309e130} id="Vector" stroke="var(--stroke-0, #F4F4F4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3771" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute h-[20.791px] left-[111.37px] top-0 w-[148.74px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Arsenal:Regular',sans-serif] leading-[20.656px] left-0 not-italic text-[#f4f4f4] text-[15px] top-[0.52px] whitespace-nowrap">für deine Gesundheit</p>
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute h-[21px] left-[429px] top-[301px] w-[241px]" data-name="Container">
      <Text />
      <Icon5 />
      <Text1 />
    </div>
  );
}

function Footer() {
  return (
    <div className="h-[368px] relative shrink-0 w-[1099px]" style={{ backgroundImage: "linear-gradient(183.159deg, rgb(90, 80, 78) 12.157%, rgb(43, 38, 37) 89.804%)" }} data-name="Footer">
      <Container50 />
      <Container58 />
    </div>
  );
}

function Root() {
  return (
    <div className="absolute content-stretch flex flex-col h-[5931px] items-start left-0 top-0 w-[1099px]" data-name="Root">
      <MainContent />
      <Footer />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute h-[40.557px] left-[8px] top-[4px] w-[26.636px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.6357 40.5566">
        <g id="Frame 42">
          <path d={svgPaths.p346db880} fill="url(#paint0_linear_1_441)" id="Union" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_441" x1="15.6122" x2="3.95475" y1="-1.9017" y2="39.0019">
            <stop stopColor="#FFE5C5" />
            <stop offset="1" stopColor="#E2B578" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Link5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[78.047px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Arsenal:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-white top-[-1px] whitespace-nowrap">Über mich</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Arsenal:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-white top-[-1px] whitespace-nowrap">Leistungen</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[57.477px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Arsenal:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-white top-[-1px] whitespace-nowrap">Kontakt</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[24px] relative shrink-0 w-[282.961px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative size-full">
        <Link5 />
        <Link6 />
        <Link7 />
      </div>
    </div>
  );
}

function Navigation2() {
  return (
    <div className="content-stretch flex h-[80px] items-center justify-between relative shrink-0 w-full" data-name="Navigation">
      <div className="h-[49px] relative shrink-0 w-[42px]" data-name="Button">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
          <Frame3 />
        </div>
      </div>
      <Container59 />
    </div>
  );
}

function Navigation1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[81px] items-start left-0 pb-px px-[37.5px] shadow-[0px_8px_32px_0px_rgba(198,162,118,0.15)] top-0 w-[1099px]" data-name="Navigation">
      <div aria-hidden className="absolute bg-[rgba(0,0,0,0)] inset-0 pointer-events-none" />
      <Navigation2 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.6)]" />
    </div>
  );
}

export default function ErnahrungsberatungLenaMaier() {
  return (
    <div className="bg-[#faf8f5] relative size-full" data-name="Ernährungsberatung Lena Maier">
      <Root />
      <Navigation1 />
    </div>
  );
}