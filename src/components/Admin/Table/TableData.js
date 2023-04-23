import React from 'react'
import {
  CloudArrowUpIcon,
  ArrowLongRightIcon,
  ArrowPathIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import TableBuild, {
  AvatarCell,
  SelectColumnFilter,
  StatusPill,
} from './TableBuild'

const getData = () => {
  const data = [{
    "name": "Terry Smitham Medhurst",
    "email": "atuny0@sohu.com",
    "title": "Regional Paradigm Technician",
    "department": "Optimization",
    "status": "Inactive",
    "role": "Member",
    "age": "50",
    "image": "https://robohash.org/hicveldicta.png"
  }, {
    "name": "Sheldon Cole Quigley",
    "email": "hbingley1@plala.or.jp",
    "title": "Regional Paradigm Technician",
    "department": "Optimization",
    "status": "Active",
    "role": "Member",
    "age": "28",
    "image": "https://robohash.org/doloremquesintcorrupti.png"
  }, {
    "name": "Terrill Hoeger Hills",
    "email": "rshawe2@51.la",
    "title": "Regional Paradigm Technician",
    "department": "Optimization",
    "status": "Inactive",
    "role": "Member",
    "age": "38",
    "image": "https://robohash.org/consequunturautconsequatur.png"
  }, {
    "name": "Miles Maggio Cummerata",
    "email": "yraigatt3@nature.com",
    "title": "Regional Paradigm Technician",
    "department": "Optimization",
    "status": "Inactive",
    "role": "Admin",
    "age": "49",
    "image": "https://robohash.org/facilisdignissimosdolore.png"
  }, {
    "name": "Mavis Yundt Schultz",
    "email": "kmeus4@upenn.edu",
    "title": "Regional Paradigm Technician",
    "department": "Optimization",
    "status": "Active",
    "role": "Admin",
    "age": "38",
    "image": "https://robohash.org/adverovelit.png"
  }, {
    "name": "Alison Franecki Reichert",
    "email": "jtreleven5@nhs.uk",
    "title": "Regional Paradigm Technician",
    "department": "Optimization",
    "status": "Active",
    "role": "Member",
    "age": "21",
    "image": "https://robohash.org/laboriosamfacilisrem.png"
  }, {
    "name": "Oleta Wyman Abbott",
    "email": "dpettegre6@columbia.edu",
    "title": "Regional Paradigm Technician",
    "department": "Optimization",
    "status": "Inactive",
    "role": "Admin",
    "age": "31",
    "image": "https://robohash.org/cupiditatererumquos.png"
  }, {
    "name": "Ewell Durgan Mueller",
    "email": "ggude7@chron.com",
    "title": "Regional Paradigm Technician",
    "department": "Optimization",
    "status": "Inactive",
    "role": "Admin",
    "age": "29",
    "image": "https://robohash.org/quiaharumsapiente.png"
  }, {
    "name": "Demetrius Gleason Corkery",
    "email": "nloiterton8@aol.com",
    "title": "Regional Paradigm Technician",
    "department": "Optimization",
    "status": "Inactive",
    "role": "Admin",
    "age": "22",
    "image": "https://robohash.org/excepturiiuremolestiae.png"
  }, {
    "name": "Eleanora Cummings Price",
    "email": "umcgourty9@jalbum.net",
    "title": "Regional Paradigm Technician",
    "department": "Optimization",
    "status": "Active",
    "role": "Admin",
    "age": "37",
    "image": "https://robohash.org/aliquamcumqueiure.png"
  }, {
    "name": "Marcel Smith Jones",
    "email": "acharlota@liveinternet.ru",
    "title": "Regional Paradigm Technician",
    "department": "Optimization",
    "status": "Inactive",
    "role": "Admin",
    "age": "39",
    "image": "https://robohash.org/impeditautest.png"
  }, {
    "name": "Assunta Heller Rath",
    "email": "rhallawellb@dropbox.com",
    "title": "Regional Paradigm Technician",
    "department": "Optimization",
    "status": "Inactive",
    "role": "Member",
    "age": "42",
    "image": "https://robohash.org/namquaerataut.png"
  }, {
    "name": "Trace Lemke Douglas",
    "email": "lgribbinc@posterous.com",
    "title": "Regional Paradigm Technician",
    "department": "Optimization",
    "status": "Inactive",
    "role": "Admin",
    "age": "26",
    "image": "https://robohash.org/voluptatemsintnulla.png"
  }, {
    "name": "Enoch Heidenreich Lynch",
    "email": "mturleyd@tumblr.com",
    "title": "Regional Paradigm Technician",
    "department": "Optimization",
    "status": "Active",
    "role": "Member",
    "age": "21",
    "image": "https://robohash.org/quisequienim.png"
  }, {
    "name": "Jeanne Cummerata Halvorson",
    "email": "kminchelle@qq.com",
    "title": "Regional Paradigm Technician",
    "department": "Optimization",
    "status": "Inactive",
    "role": "Admin",
    "age": "26",
    "image": "https://robohash.org/autquiaut.png"
  }, {
    "name": "Trycia Rosenbaum Fadel",
    "email": "dpierrof@vimeo.com",
    "title": "Regional Paradigm Technician",
    "department": "Optimization",
    "status": "Active",
    "role": "Admin",
    "age": "41",
    "image": "https://robohash.org/porronumquamid.png"
  }, {
    "name": "Bradford Bins Prohaska",
    "email": "vcholdcroftg@ucoz.com",
    "title": "Regional Paradigm Technician",
    "department": "Optimization",
    "status": "Active",
    "role": "Member",
    "age": "43",
    "image": "https://robohash.org/accusantiumvoluptateseos.png"
  }, {
    "name": "Arely Monahan Skiles",
    "email": "sberminghamh@chron.com",
    "title": "Regional Paradigm Technician",
    "department": "Optimization",
    "status": "Active",
    "role": "Admin",
    "age": "42",
    "image": "https://robohash.org/nihilharumqui.png"
  }, {
    "name": "Gust Abshire Purdy",
    "email": "bleveragei@so-net.ne.jp",
    "title": "Regional Paradigm Technician",
    "department": "Optimization",
    "status": "Active",
    "role": "Admin",
    "age": "46",
    "image": "https://robohash.org/delenitipraesentiumvoluptatum.png"
  }, {
    "name": "Lenna Schumm Renner",
    "email": "aeatockj@psu.edu",
    "title": "Regional Paradigm Technician",
    "department": "Optimization",
    "status": "Inactive",
    "role": "Member",
    "age": "41",
    "image": "https://robohash.org/ipsumutofficiis.png"
  }, {
    "name": "Doyle Feeney Ernser",
    "email": "ckensleyk@pen.io",
    "title": "Regional Paradigm Technician",
    "department": "Optimization",
    "status": "Active",
    "role": "Admin",
    "age": "23",
    "image": "https://robohash.org/providenttemporadelectus.png"
  }, {
    "name": "Tressa Williamson Weber",
    "email": "froachel@howstuffworks.com",
    "title": "Regional Paradigm Technician",
    "department": "Optimization",
    "status": "Inactive",
    "role": "Admin",
    "age": "41",
    "image": "https://robohash.org/temporarecusandaeest.png"
  }, {
    "name": "Felicity Rosenbaum O'Reilly",
    "email": "beykelhofm@wikispaces.com",
    "title": "Regional Paradigm Technician",
    "department": "Optimization",
    "status": "Active",
    "role": "Admin",
    "age": "46",
    "image": "https://robohash.org/odioquivero.png"
  }, {
    "name": "Jocelyn Dooley Schuster",
    "email": "brickeardn@fema.gov",
    "title": "Regional Paradigm Technician",
    "department": "Optimization",
    "status": "Active",
    "role": "Member",
    "age": "19",
    "image": "https://robohash.org/odiomolestiaealias.png"
  }, {
    "name": "Edwina Kiehn Ernser",
    "email": "dfundello@amazon.co.jp",
    "title": "Regional Paradigm Technician",
    "department": "Optimization",
    "status": "Active",
    "role": "Admin",
    "age": "21",
    "image": "https://robohash.org/doloremautdolores.png"
  }, {
    "name": "Griffin Deckow Braun",
    "email": "lgronaverp@cornell.edu",
    "title": "Regional Paradigm Technician",
    "department": "Optimization",
    "status": "Active",
    "role": "Member",
    "age": "35",
    "image": "https://robohash.org/laboriosammollitiaut.png"
  }, {
    "name": "Piper Wuckert Schowalter",
    "email": "fokillq@amazon.co.jp",
    "title": "Regional Paradigm Technician",
    "department": "Optimization",
    "status": "Active",
    "role": "Admin",
    "age": "47",
    "image": "https://robohash.org/nequeodiosapiente.png"
  }, {
    "name": "Kody Larkin Terry",
    "email": "xisherwoodr@ask.com",
    "title": "Regional Paradigm Technician",
    "department": "Optimization",
    "status": "Active",
    "role": "Member",
    "age": "28",
    "image": "https://robohash.org/consequunturabnon.png"
  }, {
    "name": "Macy Koepp Greenfelder",
    "email": "jissetts@hostgator.com",
    "title": "Regional Paradigm Technician",
    "department": "Optimization",
    "status": "Active",
    "role": "Member",
    "age": "45",
    "image": "https://robohash.org/amettemporeea.png"
  }, {
    "name": "Maurine Abshire Stracke",
    "email": "kdulyt@umich.edu",
    "title": "Regional Paradigm Technician",
    "department": "Optimization",
    "status": "Active",
    "role": "Member",
    "age": "31",
    "image": "https://robohash.org/perferendisideveniet.png"
  }]

  return [...data];
};

function TableData() {
  const title = "React Table + Tailwind CSS";
  const MenuButtons = [
    { title: "New", icon: PlusIcon ,variant:"gradient"},
    { title: "Upload Files", icon: CloudArrowUpIcon ,variant:"gradient"},
    { title: "Refresh", icon: ArrowPathIcon ,variant:"outlined"},
    { title: "Read More", icon: ArrowLongRightIcon ,variant:"text"},
  ];
  const columns = React.useMemo(() => [{
      Header: "Name",
      accessor: 'name',
      Cell: AvatarCell,
      imgAccessor: "image",
      emailAccessor: "email",
    },
    {
      Header: "Title",
      accessor: 'title',
    },
    {
      Header: "Status",
      accessor: 'status',
      Cell: StatusPill,
    },
    {
      Header: "Age",
      accessor: 'age',
    },
    {
      Header: "Role",
      accessor: 'role',
      Filter: SelectColumnFilter, // new
      filter: 'includes',
    },
  ], [])

  const data = React.useMemo(() => getData(), [])

  return (<TableBuild title={title} Menu={MenuButtons } columns = { columns } data = { data } /> );
}

export default TableData;