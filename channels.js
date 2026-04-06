// ============================================================
//  LOGOS — URLs de logos de canales
// ============================================================
const LOGOS = {
  espn:     'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/ESPN_wordmark.svg/200px-ESPN_wordmark.svg.png',
  fox:      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/FOX_Sports_logo.svg/200px-FOX_Sports_logo.svg.png',
  dsports:  'https://commons.wikimedia.org/wiki/Special:FilePath/DSports_logo_2022.svg',
  tnt:      'https://commons.wikimedia.org/wiki/Special:FilePath/TNT_Sports_Logo.svg',
  tyc:      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/TyC_Sports_logo.svg/200px-TyC_Sports_logo.svg.png',
  win:      'https://commons.wikimedia.org/wiki/Special:FilePath/Win_Sports_nuevo_logo.svg',
  telefe:   'https://commons.wikimedia.org/wiki/Special:FilePath/Logo_telefe_argentina.svg',
  tvpublica:'https://commons.wikimedia.org/wiki/Special:FilePath/TVP_-_Televisi%C3%B3n_P%C3%BAblica_(2021).svg',
  liga1:    'https://commons.wikimedia.org/wiki/Special:FilePath/L1MAX-LOGO.svg',
  tudn:     'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/TUDN_Logo.svg/200px-TUDN_Logo.svg.png',
  univision:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logo_Univision_2013.svg/200px-Logo_Univision_2013.svg.png',
  universo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/NBC_Universo_logo.svg/200px-NBC_Universo_logo.svg.png',
  usa_net:  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/USA_Network_logo_%282016%29.svg/200px-USA_Network_logo_%282016%29.svg.png',
  azteca7:  'https://commons.wikimedia.org/wiki/Special:FilePath/Azteca72024.png',
  canal5:   'https://commons.wikimedia.org/wiki/Special:FilePath/Canal_5_Mexico_logo_2014.svg',
  sportv:   'https://commons.wikimedia.org/wiki/Special:FilePath/SporTV_2021.png',
  premiere: 'https://commons.wikimedia.org/wiki/Special:FilePath/Premiere_(2017)_logo.png',
  laliga:   'https://commons.wikimedia.org/wiki/Special:FilePath/LaLiga_TV_Hypermotion_2023_Logo.svg',
  tigo:     'https://commons.wikimedia.org/wiki/Special:FilePath/Tigo_Sports_2025.png',
  futv:     'https://commons.wikimedia.org/wiki/Special:FilePath/Logo_de_FUTV.svg',
  tn:       'https://commons.wikimedia.org/wiki/Special:FilePath/TN_todo_noticias_logo.svg',
  trece:    'https://commons.wikimedia.org/wiki/Special:FilePath/Isotipo_eltrece_2016.png',
  bein:     'https://commons.wikimedia.org/wiki/Special:FilePath/BeIN_Sports_logo_(horizontal_version).svg',
  redbull:  'https://commons.wikimedia.org/wiki/Special:FilePath/Logo_of_Red_bull.svg',
  realmadridtv: 'https://commons.wikimedia.org/wiki/Special:FilePath/Realmadrid_Television_Logo.svg',
  rta:      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/RTA_logo.svg/200px-RTA_logo.svg.png',
  telemundo:'https://commons.wikimedia.org/wiki/Special:FilePath/Telemundo_Logo.svg',
  rtve:     'https://upload.wikimedia.org/wikipedia/commons/b/b1/TVE1_logo.svg',
  movistar: 'https://commons.wikimedia.org/wiki/Special:FilePath/Movistar_Deportes_logo.svg',
  mutv:     'https://commons.wikimedia.org/wiki/Special:FilePath/Manchester_United_FC_crest.svg',
  novasport1:'https://upload.wikimedia.org/wikipedia/commons/c/c9/Nova_Sport_1_2024.png',
  novasport2:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Nova_Sport_1_2024.png/200px-Nova_Sport_1_2024.png',
  rtvs:     'https://upload.wikimedia.org/wikipedia/commons/9/95/Rozhlas_a_telev%C3%ADzia_Slovenska_Logo_%282011-present%29.svg',
  jojsport: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Jojsport.png',
  itvdep:   'https://commons.wikimedia.org/wiki/Special:FilePath/ITV_logo.svg',
  fastwomen:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Tubi_logo_2024.svg/200px-Tubi_logo_2024.svg.png',
  cartoon:  'https://commons.wikimedia.org/wiki/Special:FilePath/Cartoon_Network_2010_logo.svg',
  disney:   'https://upload.wikimedia.org/wikipedia/commons/f/ff/2024_Disney_Channel_text_logo.svg',
  nick:     'https://commons.wikimedia.org/wiki/Special:FilePath/Nickelodeon_2009_logo.svg',
  star:     'https://upload.wikimedia.org/wikipedia/commons/c/cd/Star_Channel_2023.svg',
  comedy:   'https://upload.wikimedia.org/wikipedia/commons/a/aa/Comedy_Central_2018.svg',
  nbatv:    'https://upload.wikimedia.org/wikipedia/en/d/d2/NBA_TV.svg',
  deportv:  'https://commons.wikimedia.org/wiki/Special:FilePath/Deportv.svg',
  ln:       'https://upload.wikimedia.org/wikipedia/commons/a/ae/La-Nacion-Mas-Logo.svg',
  canal26:  'https://upload.wikimedia.org/wikipedia/commons/c/c5/Canal_26_logo_%282022%29.svg',
  a24:      'https://commons.wikimedia.org/wiki/Special:FilePath/A24_%282025%29.svg',
  c5n:      'https://upload.wikimedia.org/wikipedia/commons/0/07/C5N_logo.svg',
  cronica:  'https://commons.wikimedia.org/wiki/Special:FilePath/Cr%C3%B3nica_TV_logotipo_%282016%29.png',
  america:  'https://upload.wikimedia.org/wikipedia/commons/9/99/Logotipo_de_America_TV.svg',
  nueve:    'https://commons.wikimedia.org/wiki/Special:FilePath/Canal_9_2015.png',
  adultswim:'https://commons.wikimedia.org/wiki/Special:FilePath/Adult_Swim_2003_logo.svg',
  hbo:      'https://commons.wikimedia.org/wiki/Special:FilePath/HBO_logo.svg',
  sony:     'https://commons.wikimedia.org/wiki/Special:FilePath/Sony_Channel_logo.svg',
  axn:      'https://commons.wikimedia.org/wiki/Special:FilePath/AXN_logo.svg',
  amc:      'https://commons.wikimedia.org/wiki/Special:FilePath/AMC_logo_2016.svg',
  space:    'https://upload.wikimedia.org/wikipedia/commons/1/1a/SpaceLogo.svg',
  cinemax:  'https://commons.wikimedia.org/wiki/Special:FilePath/Cinemax.svg',
  fx:       'https://upload.wikimedia.org/wikipedia/commons/4/4d/FX_International_logo.svg',
  tnt_ent:  'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/TNT_%28TV_Channel%29.svg/250px-TNT_%28TV_Channel%29.svg.png',
  history:  'https://upload.wikimedia.org/wikipedia/commons/0/01/History_%282021%29.svg',
  dischyh:  'https://upload.wikimedia.org/wikipedia/commons/a/a3/Discovery_Home_%26_Health_logo.svg',
  discovery:'https://upload.wikimedia.org/wikipedia/commons/2/27/Discovery_Channel_-_Logo_2019.svg',
};

// ============================================================
//  CHANNELS — Lista de canales
//  Para agregar un canal nuevo, copiá un objeto existente,
//  cambiá id, name, icon, color, region, logo y customSources.
// ============================================================
const channels = [

  // ── Argentina ──────────────────────────────────────────────
  { id:'espn',            name:'ESPN 1',            icon:'E1', color:'#e53e3e', region:'arg', logo: LOGOS.espn,
    customSources: [
      { url: 'https://streamtp10.com/global1.php?stream=espn', type: 'iframe' },
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=RVNQTjJIRA&lang=1', type: 'iframe' },
    ]},
  { id:'espn2',           name:'ESPN 2',            icon:'E2', color:'#e53e3e', region:'arg', logo: LOGOS.espn,
    customSources: [
      { url: 'https://streamtp10.com/global1.php?stream=espn2', type: 'iframe' },
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=RVNQTjJfQXJn&lang=1', type: 'iframe' },
    ]},
  { id:'espn3',           name:'ESPN 3',            icon:'E3', color:'#e53e3e', region:'arg', logo: LOGOS.espn,
    customSources: [
      { url: 'https://streamtp10.com/global1.php?stream=espn3', type: 'iframe' },
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=RVNQTjM&lang=1', type: 'iframe' },
    ]},
  { id:'espn4',           name:'ESPN 4',            icon:'E4', color:'#e53e3e', region:'arg', logo: LOGOS.espn,
    customSources: [
      { url: 'https://streamtp10.com/global1.php?stream=espn4', type: 'iframe' },
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=RVNQTkhE&lang=1', type: 'iframe' },
    ]},
  { id:'espn5',           name:'ESPN 5',            icon:'E5', color:'#e53e3e', region:'arg', logo: LOGOS.espn,
    customSources: [
      { url: 'https://streamtp10.com/global1.php?stream=espn5', type: 'iframe' },
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=RVNQTjQ=&lang=1', type: 'iframe' },
    ]},
  { id:'espn6',           name:'ESPN 6',            icon:'E6', color:'#e53e3e', region:'arg', logo: LOGOS.espn,
    customSources: [
      { url: 'https://streamtp10.com/global1.php?stream=espn6', type: 'iframe' },
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=Rm94U3BvcnRzM19VWQ==&lang=1', type: 'iframe' },
    ]},
  { id:'espn7',           name:'ESPN 7',            icon:'E7', color:'#e53e3e', region:'arg', logo: LOGOS.espn,
    customSources: [
      { url: 'https://streamtp10.com/global1.php?stream=espn7', type: 'iframe' },
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=Rm94U3BvcnRzMl9VWQ==&lang=1', type: 'iframe' },
    ]},
  { id:'espnpremium',     name:'ESPN Premium',      icon:'EP', color:'#c53030', region:'arg', logo: LOGOS.espn,
    customSources: [
      { url: 'https://streamtp10.com/global1.php?stream=espnpremium', type: 'iframe' },
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=Rm94X1Nwb3J0c19QcmVtaXVuX0hE&lang=1', type: 'iframe' },
    ]},
  { id:'fox1ar',          name:'Fox Sports 1',      icon:'F1', color:'#2b6cb0', region:'arg', logo: LOGOS.fox },
  { id:'fox2ar',          name:'Fox Sports 2',      icon:'F2', color:'#2b6cb0', region:'arg', logo: LOGOS.fox },
  { id:'fox3ar',          name:'Fox Sports 3',      icon:'F3', color:'#2b6cb0', region:'arg', logo: LOGOS.fox },
  { id:'dsports',         name:'DSports',           icon:'DS', color:'#6b46c1', region:'arg', logo: LOGOS.dsports,
    customSources: [
      { url: 'https://embed.ksdjugfsddeports.com/embed/directvsports.html', type: 'iframe' },
      { url: 'https://embed.ksdjugfsddeports.com/embed2/directvsports.html', type: 'iframe' },
    ]},
  { id:'dsports2',        name:'DSports 2',         icon:'D2', color:'#6b46c1', region:'arg', logo: LOGOS.dsports },
  { id:'dsportsplus',     name:'DSports+',          icon:'D+', color:'#6b46c1', region:'arg', logo: LOGOS.dsports },
  { id:'tntsports',       name:'TNT Sports AR',     icon:'TN', color:'#d69e2e', region:'arg', logo: LOGOS.tnt,
    customSources: [
      { url: 'https://streamtp10.com/global1.php?stream=tntsports', type: 'iframe' },
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=VE5UX1Nwb3J0c19IRA&lang=1', type: 'iframe' },
    ]},
  { id:'tycsports',       name:'TyC Sports',        icon:'TY', color:'#2d6a4f', region:'arg', logo: LOGOS.tyc,
    customSources: [
      { url: 'https://streamtp10.com/global1.php?stream=tycsports', type: 'iframe' },
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=VHlDU3BvcnQ&lang=1', type: 'iframe' },
    ]},
  { id:'tycinternacional', name:'TyC Internacional', icon:'TI', color:'#2d6a4f', region:'arg', logo: LOGOS.tyc,
    customSources: [
      { url: 'https://streamtp10.com/global1.php?stream=tycinternacional', type: 'iframe' },
      { url: 'https://streamx339.cloud/global1.php?channel=tycint', type: 'iframe' },
    ]},
  { id:'winplus',         name:'Win Sports+',       icon:'W+', color:'#276749', region:'arg', logo: LOGOS.win,
    customSources: [
      { url: 'https://streamtp10.com/global1.php?stream=winplus', type: 'iframe' },
      { url: 'https://streamx339.cloud/global1.php?channel=winplus', type: 'iframe' },
    ]},
  { id:'winplus2',        name:'Win Sports+ 2',     icon:'W2', color:'#276749', region:'arg', logo: LOGOS.win,
    customSources: [
      { url: 'https://streamtp10.com/global1.php?stream=winplus2', type: 'iframe' },
      { url: 'https://streamx339.cloud/global1.php?channel=winplus2', type: 'iframe' },
    ]},
  { id:'winsports',       name:'Win Sports',        icon:'WN', color:'#276749', region:'arg', logo: LOGOS.win,
    customSources: [
      { url: 'https://streamtp10.com/global1.php?stream=winsports', type: 'iframe' },
      { url: 'https://streamx339.cloud/global1.php?channel=winsports', type: 'iframe' },
    ]},
  { id:'telefe',          name:'Telefe',            icon:'TF', color:'#744210', region:'arg', logo: LOGOS.telefe,
    customSources: [
      { url: 'https://pelisjuanita.com/tv/telefe.html', type: 'iframe' },
      { url: 'https://pelisjuanita.com/tv/telefe.html', type: 'iframe' },
    ]},
  { id:'tv_publica',      name:'TV Pública',        icon:'TV', color:'#2c5282', region:'arg', logo: LOGOS.tvpublica,
    customSources: [
      { url: 'https://streamtp10.com/global1.php?stream=tv_publica', type: 'iframe' },
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=Q2FuYWw3&lang=1', type: 'iframe' },
    ]},
  { id:'eltrece',         name:'El Trece',          icon:'13', color:'#c53030', region:'arg', logo: LOGOS.trece,
    customSources: [
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=QXJ0ZWFySEQ&lang=1', type: 'iframe' },
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=QXJ0ZWFySEQ&lang=1', type: 'iframe' },
    ]},
  { id:'tn',              name:'TN Todo Noticias',  icon:'TN', color:'#1a2744', region:'arg', logo: LOGOS.tn,
    customSources: [
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=VG9kb05vdGljaWFz&lang=1', type: 'iframe' },
      { url: 'https://www.youtube.com/embed/cb12KmMMDJA?autoplay=1&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&origin=https://futbol-para-todos-chi.vercel.app', type: 'iframe' },
    ]},
  { id:'deportv',         name:'DeporTV',           icon:'DT', color:'#276749', region:'arg', logo: LOGOS.deportv,
    customSources: [
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=RGVwb3JUVkhE&lang=1', type: 'iframe' },
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=RGVwb3JUVkhE&lang=1', type: 'iframe' },
    ]},
  { id:'nbatv',           name:'NBA TV',            icon:'NB', color:'#c53030', region:'arg', logo: LOGOS.nbatv,
    customSources: [
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=TkJBX1RW&lang=1', type: 'iframe' },
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=TkJBX1RW&lang=1', type: 'iframe' },
    ]},
  { id:'liga1max',        name:'Liga 1 MAX',        icon:'L1', color:'#c05621', region:'arg', logo: LOGOS.liga1 },
  { id:'movistar_deportes_peru', name:'Movistar Deportes PE', icon:'MD', color:'#019df4', region:'int', logo: LOGOS.movistar },
  { id:'tntsportschile',  name:'TNT Sports CL',     icon:'TC', color:'#d69e2e', region:'int', logo: LOGOS.tnt },

  // ── Entretenimiento ────────────────────────────────────────
  { id:'cartoon_network', name:'Cartoon Network',   icon:'CN', color:'#c05621', region:'ent', logo: LOGOS.cartoon,
    customSources: [
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=Q2FydG9vbk5ldHdvcms=&lang=1', type: 'iframe' },
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=Q2FydG9vbk5ldHdvcms=&lang=1', type: 'iframe' },
    ]},
  { id:'disney_channel',  name:'Disney Channel',    icon:'DC', color:'#2b6cb0', region:'ent', logo: LOGOS.disney,
    customSources: [
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=RGlzbmV5Q2hhbm5lbEhE&lang=1', type: 'iframe' },
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=RGlzbmV5Q2hhbm5lbEhE&lang=1', type: 'iframe' },
    ]},
  { id:'nickelodeon',     name:'Nickelodeon',       icon:'NK', color:'#c05621', region:'ent', logo: LOGOS.nick,
    customSources: [
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=RGlzY292ZXJ5X0tpZHM=&lang=1', type: 'iframe' },
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=RGlzY292ZXJ5X0tpZHM=&lang=1', type: 'iframe' },
    ]},
  { id:'star_channel',    name:'Star Channel',      icon:'ST', color:'#1a365d', region:'ent', logo: LOGOS.star,
    customSources: [
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=Rk9YSEQ=&lang=1', type: 'iframe' },
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=Rk9YSEQ=&lang=1', type: 'iframe' },
    ]},
  { id:'comedy_central',  name:'Comedy Central',    icon:'CC', color:'#d69e2e', region:'ent', logo: LOGOS.comedy,
    customSources: [
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=Q29tZWR5Q2VudHJhbA&lang=1', type: 'iframe' },
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=Q29tZWR5Q2VudHJhbA&lang=1', type: 'iframe' },
    ]},
  { id:'flow_music',      name:'Flow Music',        icon:'FM', color:'#553c9a', region:'ent', logo: 'https://i.ibb.co/QFrVrtHP/image-removebg-preview.png',
    customSources: [
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=Rmxvd19NdXNpY19YUA==&lang=1', type: 'iframe' },
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=Rmxvd19NdXNpY19YUA==&lang=1', type: 'iframe' },
    ]},
  { id:'adult_swim',      name:'Adult Swim',        icon:'AS', color:'#1a1a1a', region:'ent', logo: LOGOS.adultswim,
    customSources: [
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=QWR1bHRfU3dpbQ==&lang=1', type: 'iframe' },
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=QWR1bHRfU3dpbQ==&lang=1', type: 'iframe' },
    ]},
  { id:'hbo',             name:'HBO',               icon:'HB', color:'#1a1a1a', region:'ent', logo: LOGOS.hbo,
    customSources: [
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=SEJPSEQ=&lang=1', type: 'iframe' },
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=SEJPSEQ=&lang=1', type: 'iframe' },
    ]},
  { id:'sony_channel',    name:'Sony Channel',      icon:'SC', color:'#1a2744', region:'ent', logo: LOGOS.sony,
    customSources: [
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=U29ueUhE&lang=1', type: 'iframe' },
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=U29ueUhE&lang=1', type: 'iframe' },
    ]},
  { id:'axn',             name:'AXN',               icon:'AX', color:'#c53030', region:'ent', logo: LOGOS.axn,
    customSources: [
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=QVhOSEQ=&lang=1', type: 'iframe' },
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=QVhOSEQ=&lang=1', type: 'iframe' },
    ]},
  { id:'amc',             name:'AMC',               icon:'AM', color:'#1a1a1a', region:'ent', logo: LOGOS.amc,
    customSources: [
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=QU1D&lang=1', type: 'iframe' },
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=QU1D&lang=1', type: 'iframe' },
    ]},
  { id:'space',           name:'Space',             icon:'SP', color:'#1a365d', region:'ent', logo: LOGOS.space,
    customSources: [
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=U3BhY2U=&lang=1', type: 'iframe' },
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=U3BhY2U=&lang=1', type: 'iframe' },
    ]},
  { id:'cinemax',         name:'Cinemax',           icon:'CX', color:'#c53030', region:'ent', logo: LOGOS.cinemax,
    customSources: [
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=Q2luZW1heA==&lang=1', type: 'iframe' },
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=Q2luZW1heA==&lang=1', type: 'iframe' },
    ]},
  { id:'fx',              name:'FX',                icon:'FX', color:'#1a1a1a', region:'ent', logo: LOGOS.fx,
    customSources: [
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=RlhIRA==&lang=1', type: 'iframe' },
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=RlhIRA==&lang=1', type: 'iframe' },
    ]},
  { id:'tnt_ent',         name:'TNT',               icon:'TT', color:'#c53030', region:'ent', logo: LOGOS.tnt_ent,
    customSources: [
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=VE5UX0hEX0FyZw==&lang=1', type: 'iframe' },
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=VE5UX0hEX0FyZw==&lang=1', type: 'iframe' },
    ]},
  { id:'history',         name:'History',           icon:'HI', color:'#744210', region:'ent', logo: LOGOS.history,
    customSources: [
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=SGlzdG9yeUhE&lang=1', type: 'iframe' },
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=SGlzdG9yeUhE&lang=1', type: 'iframe' },
    ]},
  { id:'disc_hyh',        name:'Discovery H&H',     icon:'DH', color:'#276749', region:'ent', logo: LOGOS.dischyh,
    customSources: [
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=RGlzY292ZXJ5SG9tZUhlYWx0aEhE&lang=1', type: 'iframe' },
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=RGlzY292ZXJ5SG9tZUhlYWx0aEhE&lang=1', type: 'iframe' },
    ]},
  { id:'discovery',       name:'Discovery Channel', icon:'DC', color:'#2b6cb0', region:'ent', logo: LOGOS.discovery,
    customSources: [
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=RGlzY292ZXJ5SEQ=&lang=1', type: 'iframe' },
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=RGlzY292ZXJ5SEQ=&lang=1', type: 'iframe' },
    ]},

  // ── Noticias ───────────────────────────────────────────────
  { id:'ln_plus',         name:'LN+',               icon:'LN', color:'#1a365d', region:'ent', logo: LOGOS.ln,
    customSources: [
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=TGFfTmFjaW9u&lang=1', type: 'iframe' },
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=TGFfTmFjaW9u&lang=1', type: 'iframe' },
    ]},
  { id:'canal26',         name:'Canal 26',          icon:'26', color:'#c53030', region:'ent', logo: LOGOS.canal26,
    customSources: [
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=MjZfVFZfSEQ&lang=1', type: 'iframe' },
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=MjZfVFZfSEQ&lang=1', type: 'iframe' },
    ]},
  { id:'a24',             name:'A24',               icon:'A2', color:'#2b6cb0', region:'ent', logo: LOGOS.a24,
    customSources: [
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=QW1lcmljYTI0&lang=1', type: 'iframe' },
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=QW1lcmljYTI0&lang=1', type: 'iframe' },
    ]},
  { id:'c5n',             name:'C5N',               icon:'C5', color:'#1a2744', region:'ent', logo: LOGOS.c5n,
    customSources: [
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=QzVO&lang=1', type: 'iframe' },
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=QzVO&lang=1', type: 'iframe' },
    ]},
  { id:'cronica_tv',      name:'Crónica TV',        icon:'CR', color:'#c53030', region:'ent', logo: LOGOS.cronica,
    customSources: [
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=Q3JvbmljYVRW&lang=1', type: 'iframe' },
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=Q3JvbmljYVRW&lang=1', type: 'iframe' },
    ]},
  { id:'america_tv',      name:'América TV',        icon:'AM', color:'#744210', region:'ent', logo: LOGOS.america,
    customSources: [
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=QW1lcmljYVRW&lang=1', type: 'iframe' },
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=QW1lcmljYVRW&lang=1', type: 'iframe' },
    ]},
  { id:'el_nueve',        name:'El Nueve',          icon:'N9', color:'#553c9a', region:'ent', logo: LOGOS.nueve,
    customSources: [
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=Q2FuYWw5&lang=1', type: 'iframe' },
      { url: 'https://pcn.nebunexa.life/cvatt.html?get=Q2FuYWw5&lang=1', type: 'iframe' },
    ]},

  // ── USA ────────────────────────────────────────────────────
  { id:'espndeportes',    name:'ESPN Deportes',     icon:'ED', color:'#e53e3e', region:'usa', logo: LOGOS.espn },
  { id:'tudn_usa',        name:'TUDN USA',          icon:'TU', color:'#1a365d', region:'usa', logo: LOGOS.tudn },
  { id:'fox_1_usa',       name:'Fox Sports 1',      icon:'F1', color:'#2b6cb0', region:'usa', logo: LOGOS.fox },
  { id:'fox_2_usa',       name:'Fox Sports 2',      icon:'F2', color:'#2b6cb0', region:'usa', logo: LOGOS.fox },
  { id:'universo_usa',    name:'Universo USA',      icon:'UN', color:'#553c9a', region:'usa', logo: LOGOS.universo },
  { id:'univision_usa',   name:'Univision USA',     icon:'UV', color:'#2b6cb0', region:'usa', logo: LOGOS.univision },
  { id:'fox_deportes_usa',name:'Fox Deportes',      icon:'FD', color:'#2b6cb0', region:'usa', logo: LOGOS.fox },
  { id:'usa_network',     name:'USA Network',       icon:'US', color:'#1a365d', region:'usa', logo: LOGOS.usa_net },

  // ── México ─────────────────────────────────────────────────
  { id:'azteca7',         name:'Azteca 7',          icon:'A7', color:'#9c4221', region:'mx',  logo: LOGOS.azteca7 },
  { id:'foxsportsmx',     name:'Fox Sports 1 MX',   icon:'F1', color:'#2b6cb0', region:'mx',  logo: LOGOS.fox },
  { id:'foxsports2mx',    name:'Fox Sports 2 MX',   icon:'F2', color:'#2b6cb0', region:'mx',  logo: LOGOS.fox },
  { id:'foxsports3mx',    name:'Fox Sports 3 MX',   icon:'F3', color:'#2b6cb0', region:'mx',  logo: LOGOS.fox },
  { id:'foxsportspremium',name:'Fox Sports Premium',icon:'FP', color:'#1e4e8c', region:'mx',  logo: LOGOS.fox },
  { id:'foxone',          name:'Fox ONE MX',        icon:'FO', color:'#2b6cb0', region:'mx',  logo: LOGOS.fox },
  { id:'fox',             name:'Fox MX',            icon:'FX', color:'#2b6cb0', region:'mx',  logo: LOGOS.fox },
  { id:'espnmx',          name:'ESPN MX',           icon:'E1', color:'#e53e3e', region:'mx',  logo: LOGOS.espn },
  { id:'espn2mx',         name:'ESPN 2 MX',         icon:'E2', color:'#e53e3e', region:'mx',  logo: LOGOS.espn },
  { id:'espn3mx',         name:'ESPN 3 MX',         icon:'E3', color:'#e53e3e', region:'mx',  logo: LOGOS.espn },
  { id:'canal5mx',        name:'Canal 5 MX',        icon:'C5', color:'#744210', region:'mx',  logo: LOGOS.canal5 },
  { id:'tudnmx',          name:'TUDN MX',           icon:'TM', color:'#1a365d', region:'mx',  logo: LOGOS.tudn },

  // ── Brasil ─────────────────────────────────────────────────
  { id:'sporttvbr1',      name:'Sport TV 1 BR',     icon:'S1', color:'#276749', region:'br',  logo: LOGOS.sportv },
  { id:'sporttvbr2',      name:'Sport TV 2 BR',     icon:'S2', color:'#276749', region:'br',  logo: LOGOS.sportv },
  { id:'sporttvbr3',      name:'Sport TV 3 BR',     icon:'S3', color:'#276749', region:'br',  logo: LOGOS.sportv },
  { id:'premiere1',       name:'Premiere 1 BR',     icon:'P1', color:'#2c7a7b', region:'br',  logo: LOGOS.premiere,
    customSources: [
      { url: 'https://streamtp10.com/global1.php?stream=premiere1', type: 'iframe' },
      { url: 'https://streamx339.cloud/global1.php?channel=fanatiz1', type: 'iframe' },
    ]},
  { id:'premiere2',       name:'Premiere 2 BR',     icon:'P2', color:'#2c7a7b', region:'br',  logo: LOGOS.premiere,
    customSources: [
      { url: 'https://streamtp10.com/global1.php?stream=premiere2', type: 'iframe' },
      { url: 'https://streamx339.cloud/global1.php?channel=fanatiz2', type: 'iframe' },
    ]},
  { id:'premiere3',       name:'Premiere 3 BR',     icon:'P3', color:'#2c7a7b', region:'br',  logo: LOGOS.premiere,
    customSources: [
      { url: 'https://streamtp10.com/global1.php?stream=premiere3', type: 'iframe' },
      { url: 'https://streamx339.cloud/global1.php?channel=fanatiz3', type: 'iframe' },
    ]},

  // ── Internacional ──────────────────────────────────────────
  { id:'daznf1',          name:'DAZN F1',           icon:'F1', color:'#e60028', region:'int', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/06/DAZN_Logo_Master.svg',
    customSources: [
      { url: 'https://embed.ksdjugfsddeports.com/embed2/daznf1.html', type: 'iframe' },
      { url: 'https://embed.ksdjugfsddeports.com/embed/daznf1.html', type: 'iframe' },
    ]},
  { id:'tnt_1_gb',        name:'TNT 1 GB',          icon:'T1', color:'#d69e2e', region:'int', logo: LOGOS.tnt },
  { id:'tnt_2_gb',        name:'TNT 2 GB',          icon:'T2', color:'#d69e2e', region:'int', logo: LOGOS.tnt },
  { id:'tnt_3_gb',        name:'TNT 3 GB',          icon:'T3', color:'#d69e2e', region:'int', logo: LOGOS.tnt },
  { id:'tnt_4_gb',        name:'TNT 4 GB',          icon:'T4', color:'#d69e2e', region:'int', logo: LOGOS.tnt },
  { id:'espn_nl1',        name:'ESPN 1 NL',         icon:'N1', color:'#e53e3e', region:'int', logo: LOGOS.espn },
  { id:'espn_nl2',        name:'ESPN 2 NL',         icon:'N2', color:'#e53e3e', region:'int', logo: LOGOS.espn },
  { id:'espn_nl3',        name:'ESPN 3 NL',         icon:'N3', color:'#e53e3e', region:'int', logo: LOGOS.espn },
  { id:'rta_sports',      name:'RTA Sports HD',     icon:'RT', color:'#1a365d', region:'int', logo: LOGOS.rta,
    customSources: [
      { url: 'https://rtatv.akamaized.net/Content/HLS/Live/channel(RTA3)/variant.m3u8', type: 'hls' },
      { url: 'https://rtatv.akamaized.net/Content/HLS/Live/channel(RTA3)/variant.m3u8', type: 'hls' },
    ]},
  { id:'mutv',            name:'MU TV',             icon:'MU', color:'#c53030', region:'int', logo: LOGOS.mutv,
    customSources: [
      { url: 'https://bcovlive-a.akamaihd.net/r2d2c4ca5bf57456fb1d16255c1a535c8/eu-west-1/eu-west-1/6058004203001/profile_2/chunklist.m3u8', type: 'hls' },
      { url: 'https://bcovlive-a.akamaihd.net/r6b4170ad9e8e4ed49986ecc03bac588b/eu-west-1/6058004203001/playlist.m3u8', type: 'hls' },
    ]},
  { id:'redbulltv',       name:'Red Bull TV',       icon:'RB', color:'#c53030', region:'int', logo: LOGOS.redbull,
    customSources: [
      { url: 'https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master_3360.m3u8', type: 'hls' },
      { url: 'https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master_3360.m3u8', type: 'hls' },
    ]},
  { id:'bein_xtra',       name:'beIN Sports Xtra',  icon:'BN', color:'#1a365d', region:'int', logo: LOGOS.bein,
    customSources: [
      { url: 'https://bein-esp-xumo.amagi.tv/playlistR720P.m3u8', type: 'hls' },
      { url: 'https://bein-esp-xumo.amagi.tv/playlistR720P.m3u8', type: 'hls' },
    ]},
  { id:'bein_xtra_es',    name:'beIN Sports Xtra ES',icon:'BE', color:'#1a365d', region:'int', logo: LOGOS.bein,
    customSources: [
      { url: 'https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/bein-sports-xtra-en-espanol/playlist.m3u8', type: 'hls' },
      { url: 'https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/bein-sports-xtra-en-espanol/playlist.m3u8', type: 'hls' },
    ]},
  { id:'realmadridtv',    name:'Real Madrid TV',    icon:'RM', color:'#c8a951', region:'int', logo: LOGOS.realmadridtv,
    customSources: [
      { url: 'https://rmtv.akamaized.net/hls/live/2043153/rmtv-es-web/bitrate_3.m3u8', type: 'hls' },
      { url: 'https://rmtv.akamaized.net/hls/live/2043153/rmtv-es-web/bitrate_3.m3u8', type: 'hls' },
    ]},
  { id:'la1_rtve',        name:'La 1 RTVE',         icon:'L1', color:'#2b6cb0', region:'int', logo: LOGOS.rtve,
    customSources: [
      { url: 'https://rtvelivestream.akamaized.net/rtvesec/la1/la1_main_720.m3u8', type: 'hls' },
      { url: 'https://rtvelivestream.akamaized.net/rtvesec/la1/la1_main_720.m3u8', type: 'hls' },
    ]},
  { id:'sport1_cz',       name:'Sport 1 CZ',        icon:'S1', color:'#c53030', region:'int', logo: LOGOS.novasport1,
    customSources: [
      { url: 'https://ts0-pl.tv.itself.cz/hls/master/live.m3u8?channel=727&device=2b6073bc96d57891dc6410d6ab150035&stream_profiles=profile11,profile12,profile13&changed_at=1726643016', type: 'hls' },
      { url: 'https://ts0-pl.tv.itself.cz/hls/master/live.m3u8?channel=727&device=2b6073bc96d57891dc6410d6ab150035&stream_profiles=profile11,profile12,profile13&changed_at=1726643016', type: 'hls' },
    ]},
  { id:'sport2_cz',       name:'Sport 2 CZ',        icon:'S2', color:'#c53030', region:'int', logo: LOGOS.novasport2,
    customSources: [
      { url: 'https://ts0-pl.tv.itself.cz/hls/master/live.m3u8?channel=729&device=2b6073bc96d57891dc6410d6ab150035&stream_profiles=profile11,profile12,profile13&changed_at=1726643016', type: 'hls' },
      { url: 'https://ts0-pl.tv.itself.cz/hls/master/live.m3u8?channel=729&device=2b6073bc96d57891dc6410d6ab150035&stream_profiles=profile11,profile12,profile13&changed_at=1726643016', type: 'hls' },
    ]},
  { id:'rtvs_sport',      name:'RTVS Sport',        icon:'RS', color:'#276749', region:'int', logo: LOGOS.rtvs,
    customSources: [
      { url: 'https://ts0-pl.tv.itself.cz/hls/master/live.m3u8?channel=2120&device=2b6073bc96d57891dc6410d6ab150035&stream_profiles=profile11,profile12,profile13&changed_at=172664301', type: 'hls' },
      { url: 'https://ts0-pl.tv.itself.cz/hls/master/live.m3u8?channel=2120&device=2b6073bc96d57891dc6410d6ab150035&stream_profiles=profile11,profile12,profile13&changed_at=172664301', type: 'hls' },
    ]},
  { id:'joj_sport',       name:'JOJ Sport',         icon:'JJ', color:'#553c9a', region:'int', logo: LOGOS.jojsport,
    customSources: [
      { url: 'https://ts0-pl.tv.itself.cz/hls/master/live.m3u8?channel=2164&device=2b6073bc96d57891dc6410d6ab150035&stream_profiles=profile11,profile12,profile13&changed_at=172664301', type: 'hls' },
      { url: 'https://ts0-pl.tv.itself.cz/hls/master/live.m3u8?channel=2164&device=2b6073bc96d57891dc6410d6ab150035&stream_profiles=profile11,profile12,profile13&changed_at=172664301', type: 'hls' },
    ]},
  { id:'itv_deportes',    name:'ITV Deportes',      icon:'ID', color:'#c05621', region:'int', logo: LOGOS.itvdep,
    customSources: [
      { url: 'https://stream.ads.ottera.tv/playlist.m3u8?network_id=3010', type: 'hls' },
      { url: 'https://stream.ads.ottera.tv/playlist.m3u8?network_id=3010', type: 'hls' },
    ]},

  // ── Eventos ────────────────────────────────────────────────
  { id:'futv',            name:'FUTV Eventos',      icon:'FU', color:'#276749', region:'events', logo: LOGOS.futv },
  { id:'laligahypermotion',name:'LaLiga Hypermotion',icon:'LL', color:'#e84393', region:'events', logo: LOGOS.laliga },
  { id:'tigosportsparaguay',name:'Tigo Sports PY',  icon:'TP', color:'#2b6cb0', region:'events', logo: LOGOS.tigo },
  { id:'tigosportscr',    name:'Tigo Sports CR',    icon:'TC', color:'#2b6cb0', region:'events', logo: LOGOS.tigo,
    customSources: [
      { url: 'https://stream.ads.ottera.tv/playlist.m3u8?network_id=7357', type: 'hls' },
      { url: 'https://stream.ads.ottera.tv/playlist.m3u8?network_id=7357', type: 'hls' },
    ]},
];
