const loksabha_terms = [
    {
      "loksabha": 1,
      "year_in": 1952,
      "year_out": 1957,
      "total": 543,
      "women": 24,
      "men": 519,
      "women_perc": 4.4,
      "men_perc": 95.6
    },
    {
      "loksabha": 2,
      "year_in": 1957,
      "year_out": 1962,
      "total": 537,
      "women": 24,
      "men": 513,
      "women_perc": 4.5,
      "men_perc": 95.5
    },
    {
      "loksabha": 3,
      "year_in": 1962,
      "year_out": 1967,
      "total": 540,
      "women": 37,
      "men": 503,
      "women_perc": 6.9,
      "men_perc": 93.1
    },
    {
      "loksabha": 4,
      "year_in": 1967,
      "year_out": 1970,
      "total": 553,
      "women": 33,
      "men": 520,
      "women_perc": 6,
      "men_perc": 94
    },
    {
      "loksabha": 5,
      "year_in": 1971,
      "year_out": 1977,
      "total": 553,
      "women": 28,
      "men": 525,
      "women_perc": 5.1,
      "men_perc": 94.9
    },
    {
      "loksabha": 6,
      "year_in": 1977,
      "year_out": 1979,
      "total": 557,
      "women": 21,
      "men": 536,
      "women_perc": 3.8,
      "men_perc": 96.2
    },
    {
      "loksabha": 7,
      "year_in": 1980,
      "year_out": 1984,
      "total": 566,
      "women": 32,
      "men": 534,
      "women_perc": 5.7,
      "men_perc": 94.3
    },
    {
      "loksabha": 8,
      "year_in": 1984,
      "year_out": 1989,
      "total": 567,
      "women": 45,
      "men": 522,
      "women_perc": 7.9,
      "men_perc": 92.1
    },
    {
      "loksabha": 9,
      "year_in": 1989,
      "year_out": 1991,
      "total": 534,
      "women": 28,
      "men": 506,
      "women_perc": 5.2,
      "men_perc": 94.8
    },
    {
      "loksabha": 10,
      "year_in": 1991,
      "year_out": 1996,
      "total": 555,
      "women": 42,
      "men": 513,
      "women_perc": 7.6,
      "men_perc": 92.4
    },
    {
      "loksabha": 11,
      "year_in": 1996,
      "year_out": 1997,
      "total": 551,
      "women": 41,
      "men": 510,
      "women_perc": 7.4,
      "men_perc": 92.6
    },
    {
      "loksabha": 12,
      "year_in": 1998,
      "year_out": 1999,
      "total": 546,
      "women": 44,
      "men": 502,
      "women_perc": 8.1,
      "men_perc": 91.9
    },
    {
      "loksabha": 13,
      "year_in": 1999,
      "year_out": 2004,
      "total": 568,
      "women": 52,
      "men": 516,
      "women_perc": 9.2,
      "men_perc": 90.8
    },
    {
      "loksabha": 14,
      "year_in": 2004,
      "year_out": 2009,
      "total": 586,
      "women": 52,
      "men": 534,
      "women_perc": 8.9,
      "men_perc": 91.1
    },
    {
      "loksabha": 15,
      "year_in": 2009,
      "year_out": 2014,
      "total": 560,
      "women": 64,
      "men": 496,
      "women_perc": 11.4,
      "men_perc": 88.6
    },
    {
      "loksabha": 16,
      "year_in": 2014,
      "year_out": 2019,
      "total": 573,
      "women": 68,
      "men": 505,
      "women_perc": 11.9,
      "men_perc": 88.1
    },
    {
      "loksabha": 17,
      "year_in": 2019,
      "year_out": 2024,
      "total": 541,
      "women": 78,
      "men": 463,
      "women_perc": 14.4,
      "men_perc": 85.6
    }
  ]


const political_allies = [
    {
        'name':'NDA',
        'parties':['BJP','SHS','JD(U)','AIADMK'],
        'color':'#d35400',
        'id': 0,
        'before': 0
    },
    {
        'name':'UPA',
        'parties':['INC','NCP','DMK','RJD'],
        'color':'#2980b9',
        'id': 1,
        'before': 4
    },
    {
        'name':'MGB',
        'parties':['BSP','SP'],
        'color':'#27ae60',
        'id': 2,
        'before': 8
    },
    {
        'name':'Left',
        'parties':['CPI(M)','CPI'],
        'color':'#e74c3c',
        'id': 3,
        'before': 10
    },
    {
        'name':'Others',
        'parties':['AITC','AAP','YSRCP','TDP','BJD'],
        'color':'#f39c12',
        'id': 4,
        'before': 12
    }
]

const parties_2019 = [
    {
      "party": "BJP",
      "Total": 434,
      "women": 55,
      "perc": 12.7
    },
    {
      "party": "INC",
      "Total": 417,
      "women": 54,
      "perc": 12.9
    },
    {
      "party": "BSP",
      "Total": 377,
      "women": 24,
      "perc": 6.4
    },
    {
      "party": "SHS",
      "Total": 97,
      "women": 12,
      "perc": 12.4
    },
    {
      "party": "CPI(M)",
      "Total": 69,
      "women": 10,
      "perc": 14.5
    },
    {
      "party": "AITC",
      "Total": 62,
      "women": 23,
      "perc": 37.1
    },
    {
      "party": "SP",
      "Total": 49,
      "women": 6,
      "perc": 12.2
    },
    {
      "party": "CPI",
      "Total": 49,
      "women": 4,
      "perc": 8.2
    },
    {
      "party": "AAP",
      "Total": 35,
      "women": 3,
      "perc": 8.6
    },
    {
      "party": "NCP",
      "Total": 34,
      "women": 1,
      "perc": 2.9
    },
    {
      "party": "YSRCP",
      "Total": 25,
      "women": 4,
      "perc": 16
    },
    {
      "party": "TDP",
      "Total": 25,
      "women": 3,
      "perc": 12
    },
    {
      "party": "JD(U)",
      "Total": 24,
      "women": 2,
      "perc": 8.3
    },
    {
      "party": "DMK",
      "Total": 24,
      "women": 2,
      "perc": 8.3
    },
    {
      "party": "AIADMK",
      "Total": 22,
      "women": 1,
      "perc": 4.5
    },
    {
      "party": "RJD",
      "Total": 21,
      "women": 3,
      "perc": 14.3
    },
    {
      "party": "BJD",
      "Total": 21,
      "women": 7,
      "perc": 33.3
    }
  ]

const ls2019_map = [
    {
      "s_name": "Andaman & Nicobar",
      "pc_name": "Andaman and Nicobar Islands",
      "mp": "Kuldeep Rai Sharma",
      "gen": "m"
    },
    {
      "s_name": "Andhra Pradesh",
      "pc_name": "Amalapuram",
      "mp": "Chinta Anuradha",
      "gen": "f"
    },
    {
      "s_name": "Andhra Pradesh",
      "pc_name": "Anakapalli",
      "mp": "Dr Beesetti Venkata",
      "gen": "f"
    },
    {
      "s_name": "Andhra Pradesh",
      "pc_name": "Anantapuramu",
      "mp": "Talari Rangaiah",
      "gen": "m"
    },
    {
      "s_name": "Andhra Pradesh",
      "pc_name": "Araku",
      "mp": "Goddeti Madhavi",
      "gen": "f"
    },
    {
      "s_name": "Andhra Pradesh",
      "pc_name": "Bapatla",
      "mp": "Nandigam Suresh",
      "gen": "m"
    },
    {
      "s_name": "Andhra Pradesh",
      "pc_name": "Chittoor",
      "mp": "N Reddeppa",
      "gen": "m"
    },
    {
      "s_name": "Andhra Pradesh",
      "pc_name": "Eluru",
      "mp": "Kotagiri Sridhar",
      "gen": "m"
    },
    {
      "s_name": "Andhra Pradesh",
      "pc_name": "Guntur",
      "mp": "Jayadev Galla",
      "gen": "m"
    },
    {
      "s_name": "Andhra Pradesh",
      "pc_name": "Hindupur",
      "mp": "Kuruva Gorantla Madhav",
      "gen": "m"
    },
    {
      "s_name": "Andhra Pradesh",
      "pc_name": "Kadapa",
      "mp": "Y S Avinash Reddy",
      "gen": "m"
    },
    {
      "s_name": "Andhra Pradesh",
      "pc_name": "Kakinada",
      "mp": "Vanga Geethaviswanath",
      "gen": "f"
    },
    {
      "s_name": "Andhra Pradesh",
      "pc_name": "Kurnool",
      "mp": "Ayushman Doctor Sanjeev",
      "gen": "m"
    },
    {
      "s_name": "Andhra Pradesh",
      "pc_name": "Machilipatnam",
      "mp": "Balashowry Vallabhaneni",
      "gen": "m"
    },
    {
      "s_name": "Andhra Pradesh",
      "pc_name": "Nandyal",
      "mp": "Pocha Brahmananda Reddy",
      "gen": "m"
    },
    {
      "s_name": "Andhra Pradesh",
      "pc_name": "Narasaraopet",
      "mp": "Lavu Sri Krishna Devarayalu",
      "gen": "m"
    },
    {
      "s_name": "Andhra Pradesh",
      "pc_name": "Narsapuram",
      "mp": "Kanumuru Raghu Rama Krishna Raju",
      "gen": "m"
    },
    {
      "s_name": "Andhra Pradesh",
      "pc_name": "Nellore",
      "mp": "Adala Prabhakar Reddy",
      "gen": "m"
    },
    {
      "s_name": "Andhra Pradesh",
      "pc_name": "Ongole",
      "mp": "Magunta Sreenivasulu Reddy",
      "gen": "m"
    },
    {
      "s_name": "Andhra Pradesh",
      "pc_name": "Rajahmundry",
      "mp": "Margani Bharat",
      "gen": "m"
    },
    {
      "s_name": "Andhra Pradesh",
      "pc_name": "Rajampet",
      "mp": "P V Midhun Reddy",
      "gen": "m"
    },
    {
      "s_name": "Andhra Pradesh",
      "pc_name": "Srikakulam",
      "mp": "Kinjarapu Ram",
      "gen": "m"
    },
    {
      "s_name": "Andhra Pradesh",
      "pc_name": "Tirupati",
      "mp": "Balli Durga Prasad Rao",
      "gen": "m"
    },
    {
      "s_name": "Andhra Pradesh",
      "pc_name": "Vijayawada",
      "mp": "Kesineni Srinivasa",
      "gen": "m"
    },
    {
      "s_name": "Andhra Pradesh",
      "pc_name": "Visakhapatnam",
      "mp": "M V V Satyanarayana",
      "gen": "m"
    },
    {
      "s_name": "Andhra Pradesh",
      "pc_name": "Vizianagaram",
      "mp": "Bellana Chandra Sekhar",
      "gen": "m"
    },
    {
      "s_name": "Arunachal Pradesh",
      "pc_name": "Arunachal East",
      "mp": "Tapir Gao",
      "gen": "m"
    },
    {
      "s_name": "Arunachal Pradesh",
      "pc_name": "Arunachal West",
      "mp": "Kiren Rijiju",
      "gen": "m"
    },
    {
      "s_name": "Assam",
      "pc_name": "Autonomous District",
      "mp": "Horen Sing Bey",
      "gen": "m"
    },
    {
      "s_name": "Assam",
      "pc_name": "Barpeta",
      "mp": "Abdul Khaleque",
      "gen": "m"
    },
    {
      "s_name": "Assam",
      "pc_name": "Dhubri",
      "mp": "Badruddin Ajmal",
      "gen": "m"
    },
    {
      "s_name": "Assam",
      "pc_name": "Dibrugarh",
      "mp": "Rameswar Teli",
      "gen": "m"
    },
    {
      "s_name": "Assam",
      "pc_name": "Gauhati",
      "mp": "Queen Oja",
      "gen": "f"
    },
    {
      "s_name": "Assam",
      "pc_name": "Jorhat",
      "mp": "Topon Kumar Gogoi",
      "gen": "m"
    },
    {
      "s_name": "Assam",
      "pc_name": "Kaliabor",
      "mp": "Gaurav Gogoi",
      "gen": "m"
    },
    {
      "s_name": "Assam",
      "pc_name": "Karimganj",
      "mp": "Kripanath Mallah",
      "gen": "m"
    },
    {
      "s_name": "Assam",
      "pc_name": "Kokrajhar",
      "mp": "Naba Kumar Sarania",
      "gen": "m"
    },
    {
      "s_name": "Assam",
      "pc_name": "Lakhimpur",
      "mp": "Pradan Baruah",
      "gen": "m"
    },
    {
      "s_name": "Assam",
      "pc_name": "Mangaldoi",
      "mp": "Dilip Saikia",
      "gen": "m"
    },
    {
      "s_name": "Assam",
      "pc_name": "Nowgong",
      "mp": "Pradyut Bordoloi",
      "gen": "m"
    },
    {
      "s_name": "Assam",
      "pc_name": "Silchar",
      "mp": "Rajdeep Roy",
      "gen": "m"
    },
    {
      "s_name": "Assam",
      "pc_name": "Tezpur",
      "mp": "Pallab Lochan Das",
      "gen": "m"
    },
    {
      "s_name": "Bihar",
      "pc_name": "Araria",
      "mp": "Pradeep Kumar Singh",
      "gen": "m"
    },
    {
      "s_name": "Bihar",
      "pc_name": "Arrah",
      "mp": "R K Singh",
      "gen": "m"
    },
    {
      "s_name": "Bihar",
      "pc_name": "Aurangabad",
      "mp": "Sushil Kumar",
      "gen": "m"
    },
    {
      "s_name": "Bihar",
      "pc_name": "Banka",
      "mp": "Giridhari Yadav",
      "gen": "m"
    },
    {
      "s_name": "Bihar",
      "pc_name": "Begusarai",
      "mp": "Giriraj Singh",
      "gen": "m"
    },
    {
      "s_name": "Bihar",
      "pc_name": "Bhagalpur",
      "mp": "Ajay Kumar Mandal",
      "gen": "m"
    },
    {
      "s_name": "Bihar",
      "pc_name": "Buxar",
      "mp": "Ashwini Kumar",
      "gen": "m"
    },
    {
      "s_name": "Bihar",
      "pc_name": "Darbhanga",
      "mp": "Gopal Jee Thakur",
      "gen": "m"
    },
    {
      "s_name": "Bihar",
      "pc_name": "Gaya",
      "mp": "Vijay Kumar",
      "gen": "m"
    },
    {
      "s_name": "Bihar",
      "pc_name": "Gopalganj",
      "mp": "Dr Alok Kumar Suman",
      "gen": "m"
    },
    {
      "s_name": "Bihar",
      "pc_name": "Hajipur",
      "mp": "Pashu Pati Kumar Paras",
      "gen": "m"
    },
    {
      "s_name": "Bihar",
      "pc_name": "Jahanabad",
      "mp": "Chandeshwar Prasad",
      "gen": "m"
    },
    {
      "s_name": "Bihar",
      "pc_name": "Jamui",
      "mp": "Chirag Paswan",
      "gen": "m"
    },
    {
      "s_name": "Bihar",
      "pc_name": "Jhanjharpur",
      "mp": "Ramprit Mandal",
      "gen": "m"
    },
    {
      "s_name": "Bihar",
      "pc_name": "Karakat",
      "mp": "Mahabali Singh",
      "gen": "m"
    },
    {
      "s_name": "Bihar",
      "pc_name": "Katihar",
      "mp": "Dulal Chandra Goswami",
      "gen": "m"
    },
    {
      "s_name": "Bihar",
      "pc_name": "Khagaria",
      "mp": "Choudhary Mehboob",
      "gen": "m"
    },
    {
      "s_name": "Bihar",
      "pc_name": "Kishanganj",
      "mp": "Dr Mohammad Jawed",
      "gen": "m"
    },
    {
      "s_name": "Bihar",
      "pc_name": "Madhepura",
      "mp": "Dinesh Chandra Yadav",
      "gen": "m"
    },
    {
      "s_name": "Bihar",
      "pc_name": "Madhubani",
      "mp": "Ashok Kumar Yadav",
      "gen": "m"
    },
    {
      "s_name": "Bihar",
      "pc_name": "Maharajganj",
      "mp": "Janardan Singh",
      "gen": "m"
    },
    {
      "s_name": "Bihar",
      "pc_name": "Munger",
      "mp": "Rajiv Ranjan Singh",
      "gen": "m"
    },
    {
      "s_name": "Bihar",
      "pc_name": "Muzaffarpur",
      "mp": "Ajay Nishad",
      "gen": "m"
    },
    {
      "s_name": "Bihar",
      "pc_name": "Nalanda",
      "mp": "Kaushlendra Kumar",
      "gen": "m"
    },
    {
      "s_name": "Bihar",
      "pc_name": "Nawada",
      "mp": "Chandan Singh",
      "gen": "m"
    },
    {
      "s_name": "Bihar",
      "pc_name": "Paschim Champaran",
      "mp": "Dr Sanjay Jaiswal",
      "gen": "m"
    },
    {
      "s_name": "Bihar",
      "pc_name": "Pataliputra",
      "mp": "Ram Kripal Yadav",
      "gen": "m"
    },
    {
      "s_name": "Bihar",
      "pc_name": "Patna Sahib",
      "mp": "Ravi Shankar Prasad",
      "gen": "m"
    },
    {
      "s_name": "Bihar",
      "pc_name": "Purnia",
      "mp": "Santosh Kumar",
      "gen": "m"
    },
    {
      "s_name": "Bihar",
      "pc_name": "Purvi Champaran",
      "mp": "Radha Mohan Singh",
      "gen": "m"
    },
    {
      "s_name": "Bihar",
      "pc_name": "Samastipur",
      "mp": "Ramchandra Paswan",
      "gen": "m"
    },
    {
      "s_name": "Bihar",
      "pc_name": "Saran",
      "mp": "Rajiv Pratap Rudy",
      "gen": "m"
    },
    {
      "s_name": "Bihar",
      "pc_name": "Sasaram",
      "mp": "Chhedi Paswan",
      "gen": "m"
    },
    {
      "s_name": "Bihar",
      "pc_name": "Sheohar",
      "mp": "Rama Devi",
      "gen": "f"
    },
    {
      "s_name": "Bihar",
      "pc_name": "Sitamarhi",
      "mp": "Sunil Kumar Pintu",
      "gen": "m"
    },
    {
      "s_name": "Bihar",
      "pc_name": "Siwan",
      "mp": "Kavita Singh",
      "gen": "f"
    },
    {
      "s_name": "Bihar",
      "pc_name": "Supaul",
      "mp": "Dileshwar Kamait",
      "gen": "m"
    },
    {
      "s_name": "Bihar",
      "pc_name": "Ujiarpur",
      "mp": "Nityanand Rai",
      "gen": "m"
    },
    {
      "s_name": "Bihar",
      "pc_name": "Vaishali",
      "mp": "Veena Devi",
      "gen": "f"
    },
    {
      "s_name": "Bihar",
      "pc_name": "Valmiki Nagar",
      "mp": "Baidyanath Prasad Mahto",
      "gen": "m"
    },
    {
      "s_name": "Chandigarh",
      "pc_name": "Chandigarh",
      "mp": "Kirron Kher",
      "gen": "f"
    },
    {
      "s_name": "Chhattisgarh",
      "pc_name": "Bastar",
      "mp": "Deepak Baij",
      "gen": "m"
    },
    {
      "s_name": "Chhattisgarh",
      "pc_name": "Bilaspur",
      "mp": "Arun Sao",
      "gen": "m"
    },
    {
      "s_name": "Chhattisgarh",
      "pc_name": "Durg",
      "mp": "Vijay Baghel",
      "gen": "m"
    },
    {
      "s_name": "Chhattisgarh",
      "pc_name": "Janjgir",
      "mp": "Guharam Ajgalley",
      "gen": "m"
    },
    {
      "s_name": "Chhattisgarh",
      "pc_name": "Kanker",
      "mp": "Mohan Mandavi",
      "gen": "m"
    },
    {
      "s_name": "Chhattisgarh",
      "pc_name": "Korba",
      "mp": "Jyotsna Charandas",
      "gen": "f"
    },
    {
      "s_name": "Chhattisgarh",
      "pc_name": "Mahasamund",
      "mp": "Chunni Lal Sahu",
      "gen": "m"
    },
    {
      "s_name": "Chhattisgarh",
      "pc_name": "Raigarh",
      "mp": "Gomati Sai",
      "gen": "f"
    },
    {
      "s_name": "Chhattisgarh",
      "pc_name": "Raipur",
      "mp": "Sunil Kumar Soni",
      "gen": "m"
    },
    {
      "s_name": "Chhattisgarh",
      "pc_name": "Rajnandgaon",
      "mp": "Santosh Pandey",
      "gen": "m"
    },
    {
      "s_name": "Chhattisgarh",
      "pc_name": "Surguja",
      "mp": "Renuka Singh Saruta",
      "gen": "f"
    },
    {
      "s_name": "Dadra & Nagar Haveli",
      "pc_name": "Dadra and Nagar Haveli",
      "mp": "Delkar Mohanbhai Sanjibhai",
      "gen": "m"
    },
    {
      "s_name": "Daman & Diu",
      "pc_name": "Daman and Diu",
      "mp": "Lalubhai Babubhai",
      "gen": "m"
    },
    {
      "s_name": "Goa",
      "pc_name": "North Goa",
      "mp": "Shripad Yesso Naik",
      "gen": "m"
    },
    {
      "s_name": "Goa",
      "pc_name": "South Goa",
      "mp": "Cosme Francisco",
      "gen": "m"
    },
    {
      "s_name": "Gujarat",
      "pc_name": "Ahmedabad East",
      "mp": "Patel Hasmukhbhai",
      "gen": "m"
    },
    {
      "s_name": "Gujarat",
      "pc_name": "Ahmedabad West",
      "mp": "Dr Kirit P",
      "gen": "m"
    },
    {
      "s_name": "Gujarat",
      "pc_name": "Amreli",
      "mp": "Kachhadiya Naranbhai",
      "gen": "m"
    },
    {
      "s_name": "Gujarat",
      "pc_name": "Anand",
      "mp": "Patel Mitesh",
      "gen": "m"
    },
    {
      "s_name": "Gujarat",
      "pc_name": "Banaskantha",
      "mp": "Parbatbhai Savabhai Patel",
      "gen": "m"
    },
    {
      "s_name": "Gujarat",
      "pc_name": "Bardoli",
      "mp": "Parbhubhai Vasava",
      "gen": "m"
    },
    {
      "s_name": "Gujarat",
      "pc_name": "Bharuch",
      "mp": "Mansukhbhai Vasava",
      "gen": "m"
    },
    {
      "s_name": "Gujarat",
      "pc_name": "Bhavnagar",
      "mp": "Dr Bharatiben Dhirubhai",
      "gen": "f"
    },
    {
      "s_name": "Gujarat",
      "pc_name": "Chhota Udaipur",
      "mp": "Rathva Gitaben",
      "gen": "f"
    },
    {
      "s_name": "Gujarat",
      "pc_name": "Dahod",
      "mp": "Jashvantsinh Bhabhor",
      "gen": "m"
    },
    {
      "s_name": "Gujarat",
      "pc_name": "Gandhinagar",
      "mp": "Amit Shah",
      "gen": "m"
    },
    {
      "s_name": "Gujarat",
      "pc_name": "Jamnagar",
      "mp": "Poonamben Hematbhai",
      "gen": "f"
    },
    {
      "s_name": "Gujarat",
      "pc_name": "Junagadh",
      "mp": "Chudasama Rajeshbhai",
      "gen": "m"
    },
    {
      "s_name": "Gujarat",
      "pc_name": "Kachchh",
      "mp": "Chavda Vinod Lakhamshi",
      "gen": "m"
    },
    {
      "s_name": "Gujarat",
      "pc_name": "Kheda",
      "mp": "Chauhan Devusinh",
      "gen": "m"
    },
    {
      "s_name": "Gujarat",
      "pc_name": "Mahesana",
      "mp": "Shardaben Anilbhai Patel",
      "gen": "f"
    },
    {
      "s_name": "Gujarat",
      "pc_name": "Navsari",
      "mp": "C R Patil",
      "gen": "m"
    },
    {
      "s_name": "Gujarat",
      "pc_name": "Panchmahal",
      "mp": "Ratansinh Rathod",
      "gen": "m"
    },
    {
      "s_name": "Gujarat",
      "pc_name": "Patan",
      "mp": "Dabhi Bharatsinhji Shankarji",
      "gen": "m"
    },
    {
      "s_name": "Gujarat",
      "pc_name": "Porbandar",
      "mp": "Rameshbhai Lavjibhai",
      "gen": "m"
    },
    {
      "s_name": "Gujarat",
      "pc_name": "Rajkot",
      "mp": "Kundaria Mohanbhai",
      "gen": "m"
    },
    {
      "s_name": "Gujarat",
      "pc_name": "Sabarkantha",
      "mp": "Rathod Dipsinh",
      "gen": "m"
    },
    {
      "s_name": "Gujarat",
      "pc_name": "Surat",
      "mp": "Darshana Vikram Jardosh",
      "gen": "f"
    },
    {
      "s_name": "Gujarat",
      "pc_name": "Surendranagar",
      "mp": "Dr Munjapara Mahendrabhai",
      "gen": "m"
    },
    {
      "s_name": "Gujarat",
      "pc_name": "Vadodara",
      "mp": "Ranjanben Bhatt",
      "gen": "f"
    },
    {
      "s_name": "Gujarat",
      "pc_name": "Valsad",
      "mp": "Dr K C Patel",
      "gen": "m"
    },
    {
      "s_name": "Haryana",
      "pc_name": "Ambala",
      "mp": "Rattan Lal Kataria",
      "gen": "m"
    },
    {
      "s_name": "Haryana",
      "pc_name": "Bhiwani-Mahendragarh",
      "mp": "Dharambir Singh",
      "gen": "m"
    },
    {
      "s_name": "Haryana",
      "pc_name": "Faridabad",
      "mp": "Krishan Pal",
      "gen": "m"
    },
    {
      "s_name": "Haryana",
      "pc_name": "Gurgaon",
      "mp": "Rao Inderjit Singh",
      "gen": "m"
    },
    {
      "s_name": "Haryana",
      "pc_name": "Hisar",
      "mp": "Brijendra Singh",
      "gen": "m"
    },
    {
      "s_name": "Haryana",
      "pc_name": "Karnal",
      "mp": "Sanjay Bhatia",
      "gen": "m"
    },
    {
      "s_name": "Haryana",
      "pc_name": "Kurukshetra",
      "mp": "Nayab Singh",
      "gen": "m"
    },
    {
      "s_name": "Haryana",
      "pc_name": "Rohtak",
      "mp": "Arvind Kumar Sharma",
      "gen": "m"
    },
    {
      "s_name": "Haryana",
      "pc_name": "Sirsa",
      "mp": "Sunita Duggal",
      "gen": "f"
    },
    {
      "s_name": "Haryana",
      "pc_name": "Sonipat",
      "mp": "Ramesh Chander Kaushik",
      "gen": "m"
    },
    {
      "s_name": "Himachal Pradesh",
      "pc_name": "Hamirpur",
      "mp": "Anurag Singh Thakur",
      "gen": "m"
    },
    {
      "s_name": "Himachal Pradesh",
      "pc_name": "Kangra",
      "mp": "Kishan Kapoor",
      "gen": "m"
    },
    {
      "s_name": "Himachal Pradesh",
      "pc_name": "Mandi",
      "mp": "Ram Swaroop Sharma",
      "gen": "m"
    },
    {
      "s_name": "Himachal Pradesh",
      "pc_name": "Shimla",
      "mp": "Suresh Kumar Kashyap",
      "gen": "m"
    },
    {
      "s_name": "Jammu & Kashmir",
      "pc_name": "Anantnag",
      "mp": "Hasnain Masoodi",
      "gen": "m"
    },
    {
      "s_name": "Jammu & Kashmir",
      "pc_name": "Baramulla",
      "mp": "Mohammad Akbar Lone",
      "gen": "m"
    },
    {
      "s_name": "Jammu & Kashmir",
      "pc_name": "Jammu",
      "mp": "Jugal Kishore",
      "gen": "m"
    },
    {
      "s_name": "Jammu & Kashmir",
      "pc_name": "Ladakh",
      "mp": "Jamyang Tsering Namgyal",
      "gen": "m"
    },
    {
      "s_name": "Jammu & Kashmir",
      "pc_name": "Srinagar",
      "mp": "Farooq Abdullah",
      "gen": "m"
    },
    {
      "s_name": "Jammu & Kashmir",
      "pc_name": "Udhampur",
      "mp": "Jitendra Singh",
      "gen": "m"
    },
    {
      "s_name": "Jharkhand",
      "pc_name": "Chatra",
      "mp": "Sunil Kumar Singh",
      "gen": "m"
    },
    {
      "s_name": "Jharkhand",
      "pc_name": "Dhanbad",
      "mp": "Pashupati Nath Singh",
      "gen": "m"
    },
    {
      "s_name": "Jharkhand",
      "pc_name": "Dumka",
      "mp": "Sunil Soren",
      "gen": "m"
    },
    {
      "s_name": "Jharkhand",
      "pc_name": "Giridih",
      "mp": "Chandra Prakash Choudhary",
      "gen": "m"
    },
    {
      "s_name": "Jharkhand",
      "pc_name": "Godda",
      "mp": "Nishikant Dubey",
      "gen": "m"
    },
    {
      "s_name": "Jharkhand",
      "pc_name": "Hazaribagh",
      "mp": "Jayant Sinha",
      "gen": "m"
    },
    {
      "s_name": "Jharkhand",
      "pc_name": "Jamshedpur",
      "mp": "Bidyut Baran Mahato",
      "gen": "m"
    },
    {
      "s_name": "Jharkhand",
      "pc_name": "Khunti",
      "mp": "Arjun Munda",
      "gen": "m"
    },
    {
      "s_name": "Jharkhand",
      "pc_name": "Kodarma",
      "mp": "Annpurna Devi",
      "gen": "f"
    },
    {
      "s_name": "Jharkhand",
      "pc_name": "Lohardaga",
      "mp": "Sudarshan Bhagat",
      "gen": "m"
    },
    {
      "s_name": "Jharkhand",
      "pc_name": "Palamu",
      "mp": "Vishnu Dayal Ram",
      "gen": "m"
    },
    {
      "s_name": "Jharkhand",
      "pc_name": "Rajmahal",
      "mp": "Vijay Kumar Hansdak",
      "gen": "m"
    },
    {
      "s_name": "Jharkhand",
      "pc_name": "Ranchi",
      "mp": "Sanjay Seth",
      "gen": "m"
    },
    {
      "s_name": "Jharkhand",
      "pc_name": "Singhbhum",
      "mp": "Geeta Kora",
      "gen": "f"
    },
    {
      "s_name": "Karnataka",
      "pc_name": "Bagalkot",
      "mp": "Gaddigoudar Chandanagouda",
      "gen": "m"
    },
    {
      "s_name": "Karnataka",
      "pc_name": "Bangalore Central",
      "mp": "P C Mohan",
      "gen": "m"
    },
    {
      "s_name": "Karnataka",
      "pc_name": "Bangalore North",
      "mp": "D V Sadananda Gowda",
      "gen": "m"
    },
    {
      "s_name": "Karnataka",
      "pc_name": "Bangalore Rural",
      "mp": "D K Suresh",
      "gen": "m"
    },
    {
      "s_name": "Karnataka",
      "pc_name": "Bangalore South",
      "mp": "Tejasvi Surya",
      "gen": "m"
    },
    {
      "s_name": "Karnataka",
      "pc_name": "Belagavi",
      "mp": "Angadi Channabasappa",
      "gen": "m"
    },
    {
      "s_name": "Karnataka",
      "pc_name": "Bellary",
      "mp": "Y Devendrappa",
      "gen": "m"
    },
    {
      "s_name": "Karnataka",
      "pc_name": "Bidar",
      "mp": "Bhagwanth Khuba",
      "gen": "m"
    },
    {
      "s_name": "Karnataka",
      "pc_name": "Bijapur",
      "mp": "Jigajinagi Chandappa",
      "gen": "m"
    },
    {
      "s_name": "Karnataka",
      "pc_name": "Chamarajanagar",
      "mp": "V Srinivas Prasad",
      "gen": "m"
    },
    {
      "s_name": "Karnataka",
      "pc_name": "Chikballapur",
      "mp": "B N Bache Gowda",
      "gen": "m"
    },
    {
      "s_name": "Karnataka",
      "pc_name": "Chikodi",
      "mp": "Annasaheb",
      "gen": "m"
    },
    {
      "s_name": "Karnataka",
      "pc_name": "Chitradurga",
      "mp": "A Narayanaswamy",
      "gen": "m"
    },
    {
      "s_name": "Karnataka",
      "pc_name": "Dakshina Kannada",
      "mp": "Nalin Kumar Kateel",
      "gen": "m"
    },
    {
      "s_name": "Karnataka",
      "pc_name": "Davangere",
      "mp": "G M Siddeshwar",
      "gen": "m"
    },
    {
      "s_name": "Karnataka",
      "pc_name": "Dharwad",
      "mp": "Pralhad Joshi",
      "gen": "m"
    },
    {
      "s_name": "Karnataka",
      "pc_name": "Gulbarga",
      "mp": "Dr Umesh Jadhav",
      "gen": "m"
    },
    {
      "s_name": "Karnataka",
      "pc_name": "Haasan",
      "mp": "Prajwal Revanna",
      "gen": "m"
    },
    {
      "s_name": "Karnataka",
      "pc_name": "Haveri",
      "mp": "Udasi S C",
      "gen": "m"
    },
    {
      "s_name": "Karnataka",
      "pc_name": "Kolar",
      "mp": "S Muniswamy",
      "gen": "m"
    },
    {
      "s_name": "Karnataka",
      "pc_name": "Koppal",
      "mp": "Karadi Amarappa",
      "gen": "m"
    },
    {
      "s_name": "Karnataka",
      "pc_name": "Mandya",
      "mp": "Sumalatha Ambareesh",
      "gen": "f"
    },
    {
      "s_name": "Karnataka",
      "pc_name": "Mysore",
      "mp": "Prathap Simha",
      "gen": "m"
    },
    {
      "s_name": "Karnataka",
      "pc_name": "Raichur",
      "mp": "Raja Amareshwara Naik",
      "gen": "m"
    },
    {
      "s_name": "Karnataka",
      "pc_name": "Shimoga",
      "mp": "B Y Raghavendra",
      "gen": "m"
    },
    {
      "s_name": "Karnataka",
      "pc_name": "Tumkur",
      "mp": "G S Basavaraj",
      "gen": "m"
    },
    {
      "s_name": "Karnataka",
      "pc_name": "Udupi Chikmagalur",
      "mp": "Shobha Karandlaje",
      "gen": "f"
    },
    {
      "s_name": "Karnataka",
      "pc_name": "Uttara Kannada",
      "mp": "Anant Kumar Hegde",
      "gen": "m"
    },
    {
      "s_name": "Kerala",
      "pc_name": "Alappuzha",
      "mp": "A M Ariff",
      "gen": "m"
    },
    {
      "s_name": "Kerala",
      "pc_name": "Alathur",
      "mp": "Ramya Haridas",
      "gen": "f"
    },
    {
      "s_name": "Kerala",
      "pc_name": "Attingal",
      "mp": "Adoor Prakash",
      "gen": "m"
    },
    {
      "s_name": "Kerala",
      "pc_name": "Chalakudy",
      "mp": "Benny Behanan",
      "gen": "m"
    },
    {
      "s_name": "Kerala",
      "pc_name": "Ernakulam",
      "mp": "Hibi Eden",
      "gen": "m"
    },
    {
      "s_name": "Kerala",
      "pc_name": "Idukki",
      "mp": "Dean Kuriakose",
      "gen": "m"
    },
    {
      "s_name": "Kerala",
      "pc_name": "Kannur",
      "mp": "K Sudhakaran",
      "gen": "m"
    },
    {
      "s_name": "Kerala",
      "pc_name": "Kasaragod",
      "mp": "Rajmohan Unnithan",
      "gen": "m"
    },
    {
      "s_name": "Kerala",
      "pc_name": "Kollam",
      "mp": "N K Premachandran",
      "gen": "m"
    },
    {
      "s_name": "Kerala",
      "pc_name": "Kottayam",
      "mp": "Thomas Chazhikadan",
      "gen": "m"
    },
    {
      "s_name": "Kerala",
      "pc_name": "Kozhikode",
      "mp": "M K Raghavan",
      "gen": "m"
    },
    {
      "s_name": "Kerala",
      "pc_name": "Malappuram",
      "mp": "P K Kunhalikutty",
      "gen": "m"
    },
    {
      "s_name": "Kerala",
      "pc_name": "Mavelikara",
      "mp": "Kodikunnil Suresh",
      "gen": "m"
    },
    {
      "s_name": "Kerala",
      "pc_name": "Palakkad",
      "mp": "V K Sreekandan",
      "gen": "m"
    },
    {
      "s_name": "Kerala",
      "pc_name": "Pathanamthitta",
      "mp": "Anto Antony",
      "gen": "m"
    },
    {
      "s_name": "Kerala",
      "pc_name": "Ponnani",
      "mp": "E T Mohammed Basheer",
      "gen": "m"
    },
    {
      "s_name": "Kerala",
      "pc_name": "Thiruvananthapuram",
      "mp": "Shashi Tharoor",
      "gen": "m"
    },
    {
      "s_name": "Kerala",
      "pc_name": "Thrissur",
      "mp": "T N Prathapan",
      "gen": "m"
    },
    {
      "s_name": "Kerala",
      "pc_name": "Vadakara",
      "mp": "K Muraleedharan",
      "gen": "m"
    },
    {
      "s_name": "Kerala",
      "pc_name": "Wayanad",
      "mp": "Rahul Gandhi",
      "gen": "m"
    },
    {
      "s_name": "Lakshadweep",
      "pc_name": "Lakshadweep",
      "mp": "Mohammed Faizal Pp",
      "gen": "m"
    },
    {
      "s_name": "Madhya Pradesh",
      "pc_name": "Balaghat",
      "mp": "Dr Dhal Singh Bisen",
      "gen": "m"
    },
    {
      "s_name": "Madhya Pradesh",
      "pc_name": "Betul",
      "mp": "Durga Das Uikey",
      "gen": "m"
    },
    {
      "s_name": "Madhya Pradesh",
      "pc_name": "Bhind",
      "mp": "Sandhya Ray",
      "gen": "f"
    },
    {
      "s_name": "Madhya Pradesh",
      "pc_name": "Bhopal",
      "mp": "Pragya Singh Thakur",
      "gen": "f"
    },
    {
      "s_name": "Madhya Pradesh",
      "pc_name": "Chhindwara",
      "mp": "Nakul Nath",
      "gen": "m"
    },
    {
      "s_name": "Madhya Pradesh",
      "pc_name": "Damoh",
      "mp": "Prahalad Singh Patel",
      "gen": "m"
    },
    {
      "s_name": "Madhya Pradesh",
      "pc_name": "Dewas",
      "mp": "Mahendra Singh Solanky",
      "gen": "m"
    },
    {
      "s_name": "Madhya Pradesh",
      "pc_name": "Dhar",
      "mp": "Chattarsingh Darbar",
      "gen": "m"
    },
    {
      "s_name": "Madhya Pradesh",
      "pc_name": "Guna",
      "mp": "Dr K PYadav",
      "gen": "m"
    },
    {
      "s_name": "Madhya Pradesh",
      "pc_name": "Gwalior",
      "mp": "Vivek Narayan Shejwalkar",
      "gen": "m"
    },
    {
      "s_name": "Madhya Pradesh",
      "pc_name": "Hoshangabad",
      "mp": "Uday Pratap Singh",
      "gen": "m"
    },
    {
      "s_name": "Madhya Pradesh",
      "pc_name": "Indore",
      "mp": "Shankar Lalwani",
      "gen": "m"
    },
    {
      "s_name": "Madhya Pradesh",
      "pc_name": "Jabalpur",
      "mp": "Rakesh Singh",
      "gen": "m"
    },
    {
      "s_name": "Madhya Pradesh",
      "pc_name": "Khajuraho",
      "mp": "V D Sharma",
      "gen": "m"
    },
    {
      "s_name": "Madhya Pradesh",
      "pc_name": "Khandwa",
      "mp": "Nandkumar Singh",
      "gen": "m"
    },
    {
      "s_name": "Madhya Pradesh",
      "pc_name": "Khargone",
      "mp": "Gajendra Umrao",
      "gen": "m"
    },
    {
      "s_name": "Madhya Pradesh",
      "pc_name": "Mandla",
      "mp": "Faggan Singh Kulaste",
      "gen": "m"
    },
    {
      "s_name": "Madhya Pradesh",
      "pc_name": "Mandsaur",
      "mp": "Sudheer Gupta",
      "gen": "m"
    },
    {
      "s_name": "Madhya Pradesh",
      "pc_name": "Morena",
      "mp": "Narendra Singh Tomar",
      "gen": "m"
    },
    {
      "s_name": "Madhya Pradesh",
      "pc_name": "Rajgarh",
      "mp": "Rodmal Nagar",
      "gen": "m"
    },
    {
      "s_name": "Madhya Pradesh",
      "pc_name": "Ratlam",
      "mp": "Guman Singh Damor",
      "gen": "m"
    },
    {
      "s_name": "Madhya Pradesh",
      "pc_name": "Rewa",
      "mp": "Janardan Mishra",
      "gen": "m"
    },
    {
      "s_name": "Madhya Pradesh",
      "pc_name": "Sagar",
      "mp": "Rajbahadur Singh",
      "gen": "m"
    },
    {
      "s_name": "Madhya Pradesh",
      "pc_name": "Satna",
      "mp": "Ganesh Singh",
      "gen": "m"
    },
    {
      "s_name": "Madhya Pradesh",
      "pc_name": "Shahdol",
      "mp": "Himadri Singh",
      "gen": "f"
    },
    {
      "s_name": "Madhya Pradesh",
      "pc_name": "Sidhi",
      "mp": "Riti Pathak",
      "gen": "f"
    },
    {
      "s_name": "Madhya Pradesh",
      "pc_name": "Tikamgarh",
      "mp": "Dr Virendra Kumar",
      "gen": "m"
    },
    {
      "s_name": "Madhya Pradesh",
      "pc_name": "Ujjain",
      "mp": "Anil Firojiya",
      "gen": "m"
    },
    {
      "s_name": "Madhya Pradesh",
      "pc_name": "Vidisha",
      "mp": "Ramakant Bhargava",
      "gen": "m"
    },
    {
      "s_name": "Maharashtra",
      "pc_name": "Ahmednagar",
      "mp": "Dr Sujay Radhakrishna",
      "gen": "m"
    },
    {
      "s_name": "Maharashtra",
      "pc_name": "Akola",
      "mp": "Dhotre Sanjay Shamrao",
      "gen": "m"
    },
    {
      "s_name": "Maharashtra",
      "pc_name": "Amravati",
      "mp": "Navnit Ravi Rana",
      "gen": "f"
    },
    {
      "s_name": "Maharashtra",
      "pc_name": "Aurangabad",
      "mp": "Imtiaz Jaleel Syed",
      "gen": "m"
    },
    {
      "s_name": "Maharashtra",
      "pc_name": "Baramati",
      "mp": "Supriya Sule",
      "gen": "f"
    },
    {
      "s_name": "Maharashtra",
      "pc_name": "Beed",
      "mp": "Pritam Gopinathrao Munde",
      "gen": "f"
    },
    {
      "s_name": "Maharashtra",
      "pc_name": "Bhandara-Gondiya",
      "mp": "Sunil Baburao Mendhe",
      "gen": "m"
    },
    {
      "s_name": "Maharashtra",
      "pc_name": "Bhiwandi",
      "mp": "Kapil Moreshwar Patil",
      "gen": "m"
    },
    {
      "s_name": "Maharashtra",
      "pc_name": "Buldhana",
      "mp": "Jadhav Prataprao Ganpatrao",
      "gen": "m"
    },
    {
      "s_name": "Maharashtra",
      "pc_name": "Chandrapur",
      "mp": "Balubhau",
      "gen": "m"
    },
    {
      "s_name": "Maharashtra",
      "pc_name": "Dhule",
      "mp": "Bhamre Subhash Ramrao",
      "gen": "m"
    },
    {
      "s_name": "Maharashtra",
      "pc_name": "Dindori",
      "mp": "Dr Bharati Pravin Pawar",
      "gen": "f"
    },
    {
      "s_name": "Maharashtra",
      "pc_name": "Gadchiroli-Chimur",
      "mp": "Ashok Mahadevrao Nete",
      "gen": "m"
    },
    {
      "s_name": "Maharashtra",
      "pc_name": "Hatkanangle",
      "mp": "Dhairyasheel Sambhajirao Mane",
      "gen": "m"
    },
    {
      "s_name": "Maharashtra",
      "pc_name": "Hingoli",
      "mp": "Hemant Patil",
      "gen": "m"
    },
    {
      "s_name": "Maharashtra",
      "pc_name": "Jalgaon",
      "mp": "Unmesh Bhaiyyasaheb Patil",
      "gen": "m"
    },
    {
      "s_name": "Maharashtra",
      "pc_name": "Jalna",
      "mp": "Danve Raosaheb Dadarao",
      "gen": "m"
    },
    {
      "s_name": "Maharashtra",
      "pc_name": "Kalyan",
      "mp": "Dr Shrikant Eknath Shinde",
      "gen": "m"
    },
    {
      "s_name": "Maharashtra",
      "pc_name": "Kolhapur",
      "mp": "Sanjay Sadashivrao Mandlik",
      "gen": "m"
    },
    {
      "s_name": "Maharashtra",
      "pc_name": "Latur",
      "mp": "Sudhakar Tukaram Shrangare",
      "gen": "m"
    },
    {
      "s_name": "Maharashtra",
      "pc_name": "Madha",
      "mp": "Ranjeetsinha Hindurao",
      "gen": "m"
    },
    {
      "s_name": "Maharashtra",
      "pc_name": "Maval",
      "mp": "Shrirang Appa Chandu Barne",
      "gen": "m"
    },
    {
      "s_name": "Maharashtra",
      "pc_name": "Mumbai South",
      "mp": "Arvind Ganpat Sawant",
      "gen": "m"
    },
    {
      "s_name": "Maharashtra",
      "pc_name": "Mumbai North",
      "mp": "Gopal Shetty",
      "gen": "m"
    },
    {
      "s_name": "Maharashtra",
      "pc_name": "Mumbai North Central",
      "mp": "Poonam Mahajan",
      "gen": "f"
    },
    {
      "s_name": "Maharashtra",
      "pc_name": "Mumbai North East",
      "mp": "Manoj Kotak",
      "gen": "m"
    },
    {
      "s_name": "Maharashtra",
      "pc_name": "Mumbai North West",
      "mp": "Gajanan Kirtikar",
      "gen": "m"
    },
    {
      "s_name": "Maharashtra",
      "pc_name": "Mumbai South Central",
      "mp": "Rahul Ramesh Shewale",
      "gen": "m"
    },
    {
      "s_name": "Maharashtra",
      "pc_name": "Nagpur",
      "mp": "Nitin Gadkari",
      "gen": "m"
    },
    {
      "s_name": "Maharashtra",
      "pc_name": "Nanded",
      "mp": "Prataprao Patil Chikhlikar",
      "gen": "m"
    },
    {
      "s_name": "Maharashtra",
      "pc_name": "Nandurbar",
      "mp": "Dr Heena Vijaykumar",
      "gen": "f"
    },
    {
      "s_name": "Maharashtra",
      "pc_name": "Nashik",
      "mp": "Godse Hemant Tukaram",
      "gen": "m"
    },
    {
      "s_name": "Maharashtra",
      "pc_name": "Osmanabad",
      "mp": "Omprakash Bhupalsinh",
      "gen": "m"
    },
    {
      "s_name": "Maharashtra",
      "pc_name": "Palghar",
      "mp": "Rajendra Dhedya Gavit",
      "gen": "m"
    },
    {
      "s_name": "Maharashtra",
      "pc_name": "Parbhani",
      "mp": "Jadhav Sanjay Haribhau",
      "gen": "m"
    },
    {
      "s_name": "Maharashtra",
      "pc_name": "Pune",
      "mp": "Girish Bhalchandra Bapat",
      "gen": "m"
    },
    {
      "s_name": "Maharashtra",
      "pc_name": "Raigad",
      "mp": "Tatkare Sunil Dattatray",
      "gen": "m"
    },
    {
      "s_name": "Maharashtra",
      "pc_name": "Ramtek",
      "mp": "Krupal Balaji Tumane",
      "gen": "m"
    },
    {
      "s_name": "Maharashtra",
      "pc_name": "Ratnagiri-Sindhudurg",
      "mp": "Vinayak Raut",
      "gen": "m"
    },
    {
      "s_name": "Maharashtra",
      "pc_name": "Raver",
      "mp": "Khadse Raksha Nikhil",
      "gen": "f"
    },
    {
      "s_name": "Maharashtra",
      "pc_name": "Sangli",
      "mp": "Sanjaykaka Patil",
      "gen": "m"
    },
    {
      "s_name": "Maharashtra",
      "pc_name": "Satara",
      "mp": "Shrimant Chh Udayanraje Pratapsinhmaharaj Bhonsle",
      "gen": "m"
    },
    {
      "s_name": "Maharashtra",
      "pc_name": "Shirdi",
      "mp": "Sadashiv Kisan Lokhande",
      "gen": "m"
    },
    {
      "s_name": "Maharashtra",
      "pc_name": "Shirur",
      "mp": "Dr Amol Ramsing Kolhe",
      "gen": "m"
    },
    {
      "s_name": "Maharashtra",
      "pc_name": "Solapur",
      "mp": "Dr Jai Sidheshwar Shivacharya",
      "gen": "m"
    },
    {
      "s_name": "Maharashtra",
      "pc_name": "Thane",
      "mp": "Rajan Baburao Vichare",
      "gen": "m"
    },
    {
      "s_name": "Maharashtra",
      "pc_name": "Wardha",
      "mp": "Ramdas Chandrabhanji Tadas",
      "gen": "m"
    },
    {
      "s_name": "Maharashtra",
      "pc_name": "Yavatmal-Washim",
      "mp": "Bhavana Pundlikrao Gawali",
      "gen": "f"
    },
    {
      "s_name": "Manipur",
      "pc_name": "Inner Manipur",
      "mp": "Dr Rajkumar Ranjan Singh",
      "gen": "m"
    },
    {
      "s_name": "Manipur",
      "pc_name": "Outer Manipur",
      "mp": "Lorho S Pfoze",
      "gen": "m"
    },
    {
      "s_name": "Meghalaya",
      "pc_name": "Shillong",
      "mp": "Vincent H Pala",
      "gen": "m"
    },
    {
      "s_name": "Meghalaya",
      "pc_name": "Tura",
      "mp": "Agatha K Sangma",
      "gen": "f"
    },
    {
      "s_name": "Mizoram",
      "pc_name": "Mizoram",
      "mp": "C Lalrosanga",
      "gen": "m"
    },
    {
      "s_name": "Nagaland",
      "pc_name": "Nagaland",
      "mp": "Tokheho Yepthomi",
      "gen": "m"
    },
    {
      "s_name": "Delhi",
      "pc_name": "Chandni Chowk",
      "mp": "Harsh Vardhan",
      "gen": "m"
    },
    {
      "s_name": "Delhi",
      "pc_name": "East Delhi",
      "mp": "Gautam Gambhir",
      "gen": "m"
    },
    {
      "s_name": "Delhi",
      "pc_name": "New Delhi",
      "mp": "Meenakashi Lekhi",
      "gen": "f"
    },
    {
      "s_name": "Delhi",
      "pc_name": "North East Delhi",
      "mp": "Manoj Tiwari",
      "gen": "m"
    },
    {
      "s_name": "Delhi",
      "pc_name": "North West Delhi",
      "mp": "Hans Raj Hans",
      "gen": "m"
    },
    {
      "s_name": "Delhi",
      "pc_name": "South Delhi",
      "mp": "Ramesh Bidhuri",
      "gen": "m"
    },
    {
      "s_name": "Delhi",
      "pc_name": "West Delhi",
      "mp": "Parvesh Sahib Singh",
      "gen": "m"
    },
    {
      "s_name": "Orissa",
      "pc_name": "Aska",
      "mp": "Pramila Bisoyi",
      "gen": "f"
    },
    {
      "s_name": "Orissa",
      "pc_name": "Balasore",
      "mp": "Pratap Chandra Sarangi",
      "gen": "m"
    },
    {
      "s_name": "Orissa",
      "pc_name": "Bargarh",
      "mp": "Suresh Pujari",
      "gen": "m"
    },
    {
      "s_name": "Orissa",
      "pc_name": "Berhampur",
      "mp": "Chandra Sekhar Sahu",
      "gen": "m"
    },
    {
      "s_name": "Orissa",
      "pc_name": "Bhadrak",
      "mp": "Manjulata Mandal",
      "gen": "f"
    },
    {
      "s_name": "Orissa",
      "pc_name": "Bhubaneswar",
      "mp": "Aparajita Sarangi",
      "gen": "f"
    },
    {
      "s_name": "Orissa",
      "pc_name": "Bolangir",
      "mp": "Sangeeta Kumari",
      "gen": "f"
    },
    {
      "s_name": "Orissa",
      "pc_name": "Cuttack",
      "mp": "Bhartruhari Mahtab",
      "gen": "m"
    },
    {
      "s_name": "Orissa",
      "pc_name": "Dhenkanal",
      "mp": "Mahesh Sahoo",
      "gen": "m"
    },
    {
      "s_name": "Orissa",
      "pc_name": "Jagatsinghpur",
      "mp": "Rajashree Mallick",
      "gen": "f"
    },
    {
      "s_name": "Orissa",
      "pc_name": "Jajpur",
      "mp": "Sarmistha Sethi",
      "gen": "f"
    },
    {
      "s_name": "Orissa",
      "pc_name": "Kalahandi",
      "mp": "Basanta Kumar Panda",
      "gen": "m"
    },
    {
      "s_name": "Orissa",
      "pc_name": "Kandhamal",
      "mp": "Achyutananda Samanta",
      "gen": "m"
    },
    {
      "s_name": "Orissa",
      "pc_name": "Kendrapara",
      "mp": "Anubhav Mohanty",
      "gen": "m"
    },
    {
      "s_name": "Orissa",
      "pc_name": "Keonjhar",
      "mp": "Chandrani Murmu",
      "gen": "f"
    },
    {
      "s_name": "Orissa",
      "pc_name": "Koraput",
      "mp": "Saptagiri Ulaka",
      "gen": "m"
    },
    {
      "s_name": "Orissa",
      "pc_name": "Mayurbhanj",
      "mp": "Bishweswar Tudu",
      "gen": "m"
    },
    {
      "s_name": "Orissa",
      "pc_name": "Nabarangpur",
      "mp": "Ramesh Chandra Majhi",
      "gen": "m"
    },
    {
      "s_name": "Orissa",
      "pc_name": "Puri",
      "mp": "Pinaki Mishra",
      "gen": "m"
    },
    {
      "s_name": "Orissa",
      "pc_name": "Sambalpur",
      "mp": "Nitesh Ganga Deb",
      "gen": "m"
    },
    {
      "s_name": "Orissa",
      "pc_name": "Sundargarh",
      "mp": "Jual Oram",
      "gen": "m"
    },
    {
      "s_name": "Puducherry",
      "pc_name": "Puducherry",
      "mp": "V Vaithilingam",
      "gen": "m"
    },
    {
      "s_name": "Punjab",
      "pc_name": "Amritsar",
      "mp": "Gurjeet Singh Aujla",
      "gen": "m"
    },
    {
      "s_name": "Punjab",
      "pc_name": "Anandpur Sahib",
      "mp": "Manish Tewari",
      "gen": "m"
    },
    {
      "s_name": "Punjab",
      "pc_name": "Bathinda",
      "mp": "Harsimrat Kaur Badal",
      "gen": "f"
    },
    {
      "s_name": "Punjab",
      "pc_name": "Faridkot",
      "mp": "Mohammad Sadique",
      "gen": "m"
    },
    {
      "s_name": "Punjab",
      "pc_name": "Fatehgarh Sahib",
      "mp": "Amar Singh",
      "gen": "m"
    },
    {
      "s_name": "Punjab",
      "pc_name": "Firozepur",
      "mp": "Sukhbir Singh Badal",
      "gen": "m"
    },
    {
      "s_name": "Punjab",
      "pc_name": "Gurdaspur",
      "mp": "Sunny Deol",
      "gen": "m"
    },
    {
      "s_name": "Punjab",
      "pc_name": "Hoshiarpur",
      "mp": "Som Parkash",
      "gen": "m"
    },
    {
      "s_name": "Punjab",
      "pc_name": "Jalandhar",
      "mp": "Santokh Singh Chaudhary",
      "gen": "m"
    },
    {
      "s_name": "Punjab",
      "pc_name": "Khadoor Sahib",
      "mp": "Jasbir Singh",
      "gen": "m"
    },
    {
      "s_name": "Punjab",
      "pc_name": "Ludhiana",
      "mp": "Ravneet Singh Bittu",
      "gen": "m"
    },
    {
      "s_name": "Punjab",
      "pc_name": "Patiala",
      "mp": "Preneet Kaur",
      "gen": "f"
    },
    {
      "s_name": "Punjab",
      "pc_name": "Sangrur",
      "mp": "Bhagwant Mann",
      "gen": "m"
    },
    {
      "s_name": "Rajasthan",
      "pc_name": "Ajmer",
      "mp": "Bhagirath Chaudhary",
      "gen": "m"
    },
    {
      "s_name": "Rajasthan",
      "pc_name": "Alwar",
      "mp": "Balak Nath",
      "gen": "m"
    },
    {
      "s_name": "Rajasthan",
      "pc_name": "Banswara",
      "mp": "Kanakmal Katara",
      "gen": "m"
    },
    {
      "s_name": "Rajasthan",
      "pc_name": "Barmer",
      "mp": "Kailash Choudhary",
      "gen": "m"
    },
    {
      "s_name": "Rajasthan",
      "pc_name": "Bharatpur",
      "mp": "Ranjeeta Koli",
      "gen": "f"
    },
    {
      "s_name": "Rajasthan",
      "pc_name": "Bhilwara",
      "mp": "Subhash Chandra Baheria",
      "gen": "m"
    },
    {
      "s_name": "Rajasthan",
      "pc_name": "Bikaner",
      "mp": "Arjun Ram Meghwal",
      "gen": "m"
    },
    {
      "s_name": "Rajasthan",
      "pc_name": "Chittorgarh",
      "mp": "Chandra Prakash Joshi",
      "gen": "m"
    },
    {
      "s_name": "Rajasthan",
      "pc_name": "Churu",
      "mp": "Rahul Kaswan",
      "gen": "m"
    },
    {
      "s_name": "Rajasthan",
      "pc_name": "Dausa",
      "mp": "Jaskaur Meena",
      "gen": "f"
    },
    {
      "s_name": "Rajasthan",
      "pc_name": "Ganganagar",
      "mp": "Nihal Chand",
      "gen": "m"
    },
    {
      "s_name": "Rajasthan",
      "pc_name": "Jaipur",
      "mp": "Ram Charan Bohra",
      "gen": "m"
    },
    {
      "s_name": "Rajasthan",
      "pc_name": "Jaipur Rural",
      "mp": "Rajyavardhan Singh",
      "gen": "m"
    },
    {
      "s_name": "Rajasthan",
      "pc_name": "Jalore",
      "mp": "Devaji Patel",
      "gen": "m"
    },
    {
      "s_name": "Rajasthan",
      "pc_name": "Jhalawar-Baran",
      "mp": "Dushyant Singh",
      "gen": "m"
    },
    {
      "s_name": "Rajasthan",
      "pc_name": "Jhunjhunu",
      "mp": "Narendra Kumar",
      "gen": "m"
    },
    {
      "s_name": "Rajasthan",
      "pc_name": "Jodhpur",
      "mp": "Gajendra Singh Shekhawat",
      "gen": "m"
    },
    {
      "s_name": "Rajasthan",
      "pc_name": "Karauli-Dholpur",
      "mp": "Manoj Rajoria",
      "gen": "m"
    },
    {
      "s_name": "Rajasthan",
      "pc_name": "Kota",
      "mp": "Om Birla",
      "gen": "m"
    },
    {
      "s_name": "Rajasthan",
      "pc_name": "Nagaur",
      "mp": "Hanuman Beniwal",
      "gen": "m"
    },
    {
      "s_name": "Rajasthan",
      "pc_name": "Pali",
      "mp": "P P Chaudhary",
      "gen": "m"
    },
    {
      "s_name": "Rajasthan",
      "pc_name": "Rajsamand",
      "mp": "Diya Kumari",
      "gen": "f"
    },
    {
      "s_name": "Rajasthan",
      "pc_name": "Sikar",
      "mp": "Sumedhanand Saraswati",
      "gen": "m"
    },
    {
      "s_name": "Rajasthan",
      "pc_name": "Tonk-Sawai Madhopur",
      "mp": "Sukhbir Singh Jaunapuria",
      "gen": "m"
    },
    {
      "s_name": "Rajasthan",
      "pc_name": "Udaipur",
      "mp": "Arjunlal Meena",
      "gen": "m"
    },
    {
      "s_name": "Sikkim",
      "pc_name": "Sikkim",
      "mp": "Indra Hang Subba",
      "gen": "m"
    },
    {
      "s_name": "Tamil Nadu",
      "pc_name": "Arakkonam",
      "mp": "Jagathrakshakan S",
      "gen": "m"
    },
    {
      "s_name": "Tamil Nadu",
      "pc_name": "Arani",
      "mp": "Vishnu Prasad M K",
      "gen": "m"
    },
    {
      "s_name": "Tamil Nadu",
      "pc_name": "Chennai Central",
      "mp": "Dayanidhi Maran",
      "gen": "m"
    },
    {
      "s_name": "Tamil Nadu",
      "pc_name": "Chennai North",
      "mp": "Dr Kalanidhi Veeraswamy",
      "gen": "m"
    },
    {
      "s_name": "Tamil Nadu",
      "pc_name": "Chennai South",
      "mp": "Thamizhachi Thangapandian",
      "gen": "f"
    },
    {
      "s_name": "Tamil Nadu",
      "pc_name": "Chidambaram",
      "mp": "Thirumaavalavan Thol",
      "gen": "m"
    },
    {
      "s_name": "Tamil Nadu",
      "pc_name": "Coimbatore",
      "mp": "Natarajan P R",
      "gen": "m"
    },
    {
      "s_name": "Tamil Nadu",
      "pc_name": "Cuddalore",
      "mp": "T R V S Ramesh",
      "gen": "m"
    },
    {
      "s_name": "Tamil Nadu",
      "pc_name": "Dharmapuri",
      "mp": "Senthil Kumar S",
      "gen": "m"
    },
    {
      "s_name": "Tamil Nadu",
      "pc_name": "Dindigul",
      "mp": "Velusamy P",
      "gen": "m"
    },
    {
      "s_name": "Tamil Nadu",
      "pc_name": "Erode",
      "mp": "Ganeshamurthi A",
      "gen": "m"
    },
    {
      "s_name": "Tamil Nadu",
      "pc_name": "Kallakurichi",
      "mp": "Gautham Sigamani Pon",
      "gen": "m"
    },
    {
      "s_name": "Tamil Nadu",
      "pc_name": "Kancheepuram",
      "mp": "Selvam G",
      "gen": "m"
    },
    {
      "s_name": "Tamil Nadu",
      "pc_name": "Kanyakumari",
      "mp": "Vasanthakumar H",
      "gen": "m"
    },
    {
      "s_name": "Tamil Nadu",
      "pc_name": "Karur",
      "mp": "Jothimani S",
      "gen": "f"
    },
    {
      "s_name": "Tamil Nadu",
      "pc_name": "Krishnagiri",
      "mp": "Dr A Chellakumar",
      "gen": "m"
    },
    {
      "s_name": "Tamil Nadu",
      "pc_name": "Madurai",
      "mp": "Venkatesan S",
      "gen": "m"
    },
    {
      "s_name": "Tamil Nadu",
      "pc_name": "Mayiladuturai",
      "mp": "Ramalingam S",
      "gen": "m"
    },
    {
      "s_name": "Tamil Nadu",
      "pc_name": "Nagapattinam",
      "mp": "Selvaraj M",
      "gen": "m"
    },
    {
      "s_name": "Tamil Nadu",
      "pc_name": "Namakkal",
      "mp": "Chinraj A K P",
      "gen": "m"
    },
    {
      "s_name": "Tamil Nadu",
      "pc_name": "Nilgiris",
      "mp": "A Raja",
      "gen": "m"
    },
    {
      "s_name": "Tamil Nadu",
      "pc_name": "Perambalur",
      "mp": "Dr Paarivendhar T R",
      "gen": "m"
    },
    {
      "s_name": "Tamil Nadu",
      "pc_name": "Pollachi",
      "mp": "Shanmuga Sundaram K",
      "gen": "m"
    },
    {
      "s_name": "Tamil Nadu",
      "pc_name": "Ramanathapuram",
      "mp": "K Navaskani",
      "gen": "m"
    },
    {
      "s_name": "Tamil Nadu",
      "pc_name": "Salem",
      "mp": "Parthiban S R",
      "gen": "m"
    },
    {
      "s_name": "Tamil Nadu",
      "pc_name": "Sivaganga",
      "mp": "Karti Chidambaram",
      "gen": "m"
    },
    {
      "s_name": "Tamil Nadu",
      "pc_name": "Sriperumbudur",
      "mp": "Baalu T R",
      "gen": "m"
    },
    {
      "s_name": "Tamil Nadu",
      "pc_name": "Tenkasi",
      "mp": "Dhanush M Kumar",
      "gen": "m"
    },
    {
      "s_name": "Tamil Nadu",
      "pc_name": "Thanjavur",
      "mp": "Palanimanickam S S",
      "gen": "m"
    },
    {
      "s_name": "Tamil Nadu",
      "pc_name": "Theni",
      "mp": "Raveendranath Kumar P",
      "gen": "m"
    },
    {
      "s_name": "Tamil Nadu",
      "pc_name": "Thiruvallur",
      "mp": "Dr K Jayakumar",
      "gen": "m"
    },
    {
      "s_name": "Tamil Nadu",
      "pc_name": "Thoothukudi",
      "mp": "Kanimozhi Karunanidhi",
      "gen": "f"
    },
    {
      "s_name": "Tamil Nadu",
      "pc_name": "Tiruchirappalli",
      "mp": "Thirunavukkarasar",
      "gen": "m"
    },
    {
      "s_name": "Tamil Nadu",
      "pc_name": "Tirunelveli",
      "mp": "Gnanathiraviam S",
      "gen": "m"
    },
    {
      "s_name": "Tamil Nadu",
      "pc_name": "Tiruppur",
      "mp": "Subbarayan K",
      "gen": "m"
    },
    {
      "s_name": "Tamil Nadu",
      "pc_name": "Tiruvannamalai",
      "mp": "Annadurai C N",
      "gen": "m"
    },
    {
      "s_name": "Tamil Nadu",
      "pc_name": "Viluppuram",
      "mp": "Ravikumar D",
      "gen": "m"
    },
    {
      "s_name": "Tamil Nadu",
      "pc_name": "Virudhunagar",
      "mp": "Manickam Tagore B",
      "gen": "m"
    },
    {
      "s_name": "Telangana",
      "pc_name": "Adilabad",
      "mp": "Soyam Bapu Rao",
      "gen": "m"
    },
    {
      "s_name": "Telangana",
      "pc_name": "Bhuvanagiri",
      "mp": "Komati Reddy",
      "gen": "m"
    },
    {
      "s_name": "Telangana",
      "pc_name": "Chevella",
      "mp": "Dr G Ranjith Reddy",
      "gen": "m"
    },
    {
      "s_name": "Telangana",
      "pc_name": "Hyderabad",
      "mp": "Asaduddin Owaisi",
      "gen": "m"
    },
    {
      "s_name": "Telangana",
      "pc_name": "Karimnagar",
      "mp": "Bandi Sanjay Kumar",
      "gen": "m"
    },
    {
      "s_name": "Telangana",
      "pc_name": "Khammam",
      "mp": "Nama Nageswr Rao",
      "gen": "m"
    },
    {
      "s_name": "Telangana",
      "pc_name": "Mahabubabad",
      "mp": "Kavitha Malothu",
      "gen": "f"
    },
    {
      "s_name": "Telangana",
      "pc_name": "Mahabubnagar",
      "mp": "Manne Srinivas Reddy",
      "gen": "m"
    },
    {
      "s_name": "Telangana",
      "pc_name": "Malkajgiri",
      "mp": "Anumula Revanth Reddy",
      "gen": "m"
    },
    {
      "s_name": "Telangana",
      "pc_name": "Medak",
      "mp": "Kotha Prabhakar Reddy",
      "gen": "m"
    },
    {
      "s_name": "Telangana",
      "pc_name": "Nagarkurnool",
      "mp": "Pothuganti Ramulu",
      "gen": "m"
    },
    {
      "s_name": "Telangana",
      "pc_name": "Nalgonda",
      "mp": "Uttam Kumar",
      "gen": "m"
    },
    {
      "s_name": "Telangana",
      "pc_name": "Nizamabad",
      "mp": "Arvind Dharmapuri",
      "gen": "m"
    },
    {
      "s_name": "Telangana",
      "pc_name": "Peddapalli",
      "mp": "Venkatesh Netha Borlakunta",
      "gen": "m"
    },
    {
      "s_name": "Telangana",
      "pc_name": "Secunderabad",
      "mp": "GKishan Reddy",
      "gen": "m"
    },
    {
      "s_name": "Telangana",
      "pc_name": "Warangal",
      "mp": "Dayakar Pasunoori",
      "gen": "m"
    },
    {
      "s_name": "Telangana",
      "pc_name": "Zahirabad",
      "mp": "B B Patil",
      "gen": "m"
    },
    {
      "s_name": "Tripura",
      "pc_name": "Tripura East",
      "mp": "Rebati Tripura",
      "gen": "m"
    },
    {
      "s_name": "Tripura",
      "pc_name": "Tripura West",
      "mp": "Pratima Bhoumik",
      "gen": "f"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Agra",
      "mp": "S P Singh Baghel",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Akbarpur",
      "mp": "Devendra Singh",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Aligarh",
      "mp": "Satish Kumar Gautam",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Allahabad",
      "mp": "Rita Bahuguna Joshi",
      "gen": "f"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Ambedkar Nagar",
      "mp": "Ritesh Pandey",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Amethi",
      "mp": "Smriti Irani",
      "gen": "f"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Amroha",
      "mp": "Kunwar Danish Ali",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Aonla",
      "mp": "Dharmendra Kashyap",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Azamgarh",
      "mp": "Akhilesh Yadav",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Badaun",
      "mp": "Dr Sanghmitra Maurya",
      "gen": "f"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Baghpat",
      "mp": "Satya Pal Singh",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Bahraich",
      "mp": "Akshaibar Lal",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Ballia",
      "mp": "Virendra Singh",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Banda",
      "mp": "R K Singh Patel",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Bansgaon",
      "mp": "Kamlesh Paswan",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Barabanki",
      "mp": "Upendra Singh Rawat",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Bareilly",
      "mp": "Santosh Kumar Gangwar",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Basti",
      "mp": "Harish Chandra",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Bhadohi",
      "mp": "Ramesh Chand",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Bijnor",
      "mp": "Malook Nagar",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Bulandshahr",
      "mp": "Bhola Singh",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Chandauli",
      "mp": "Dr Mahendra Nath",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Deoria",
      "mp": "Ramapati Ram Tripathi",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Dhaurahra",
      "mp": "Rekha Verma",
      "gen": "f"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Domariyaganj",
      "mp": "Jagdambika Pal",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Etah",
      "mp": "Rajveer Singh",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Etawah",
      "mp": "Dr Ram Shankar",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Faizabad",
      "mp": "Lallu Singh",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Farrukhabad",
      "mp": "Mukesh Rajput",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Fatehpur",
      "mp": "Niranjan Jyoti",
      "gen": "f"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Fatehpur Sikri",
      "mp": "Rajkumar Chahar",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Firozabad",
      "mp": "Dr Chandra Sen Jadon",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Gautam Buddha Nagar",
      "mp": "Mahesh Sharma",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Ghaziabad",
      "mp": "V K Singh",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Ghazipur",
      "mp": "Afzal Ansari",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Ghosi",
      "mp": "Atul Kumar Singh",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Gonda",
      "mp": "Kirti Vardhan Singh",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Gorakhpur",
      "mp": "Ravindra Shyamnarayan",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Hamirpur",
      "mp": "Kunwar Pushpendra",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Hardoi",
      "mp": "Jai Prakash",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Hathras",
      "mp": "Rajvir Diler",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Jalaun",
      "mp": "Bhanu Pratap Singh Verma",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Jaunpur",
      "mp": "Shyam Singh Yadav",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Jhansi",
      "mp": "Anurag Sharma",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Kairana",
      "mp": "Pradeep Kumar",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Kaiserganj",
      "mp": "Brijbhusan Sharan Singh",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Kannauj",
      "mp": "Subrat Pathak",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Kanpur",
      "mp": "Satyadev Pachauri",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Kaushambi",
      "mp": "Vinod Kumar Sonkar",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Kheri",
      "mp": "Ajay Kumar",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Kushi Nagar",
      "mp": "Vijay Kumar Dubey",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Lalganj",
      "mp": "Sangeeta Azad",
      "gen": "f"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Lucknow",
      "mp": "Rajnath Singh",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Machhlishahr",
      "mp": "B P Saroj",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Maharajganj",
      "mp": "Pankaj Choudhary",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Mainpuri",
      "mp": "Mulayam Singh Yadav",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Mathura",
      "mp": "Hema Malini",
      "gen": "f"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Meerut",
      "mp": "Rajendra Agarwal",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Mirzapur",
      "mp": "Anupriya Patel",
      "gen": "f"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Misrikh",
      "mp": "Ashok Kumar Rawat",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Mohanlalganj",
      "mp": "Kaushal Kishore",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Moradabad",
      "mp": "Dr S T Hasan",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Muzaffarnagar",
      "mp": "Sanjeev Kumar Balyan",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Nagina",
      "mp": "Girish Chandra",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Phulpur",
      "mp": "Keshari Devi Patel",
      "gen": "f"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Pilibhit",
      "mp": "Varun Gandhi",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Pratapgarh",
      "mp": "Sangam Lal Gupta",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Rae Bareli",
      "mp": "Sonia Gandhi",
      "gen": "f"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Rampur",
      "mp": "Azam Khan",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Robertsganj",
      "mp": "Pakauri Lal Kol",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Saharanpur",
      "mp": "Haji Fazlur Rehman",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Salempur",
      "mp": "Ravinder",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Sambhal",
      "mp": "Dr Shafiqur Rehman Barq",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Sant Kabir Nagar",
      "mp": "Praveen Kumar Nishad",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Shahjahanpur",
      "mp": "Arun Kumar Sagar",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Shrawasti",
      "mp": "Ram Shiromani",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Sitapur",
      "mp": "Rajesh Verma",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Sultanpur",
      "mp": "Maneka Gandhi",
      "gen": "f"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Unnao",
      "mp": "Sakshi Maharaj",
      "gen": "m"
    },
    {
      "s_name": "Uttar Pradesh",
      "pc_name": "Varanasi",
      "mp": "Narendra Modi",
      "gen": "m"
    },
    {
      "s_name": "Uttarakhand",
      "pc_name": "Almora",
      "mp": "Ajay Tamta",
      "gen": "m"
    },
    {
      "s_name": "Uttarakhand",
      "pc_name": "Garhwal",
      "mp": "Tirath Singh Rawat",
      "gen": "m"
    },
    {
      "s_name": "Uttarakhand",
      "pc_name": "Haridwar",
      "mp": "Ramesh Pokhriyal Nishank",
      "gen": "m"
    },
    {
      "s_name": "Uttarakhand",
      "pc_name": "Nainital-Udhamsingh Nagar",
      "mp": "Ajay Bhatt",
      "gen": "m"
    },
    {
      "s_name": "Uttarakhand",
      "pc_name": "Tehri Garhwal",
      "mp": "Mala Rajya",
      "gen": "f"
    },
    {
      "s_name": "West Bengal",
      "pc_name": "Alipurduars",
      "mp": "John Barla",
      "gen": "m"
    },
    {
      "s_name": "West Bengal",
      "pc_name": "Arambagh",
      "mp": "Aparupa Poddar",
      "gen": "f"
    },
    {
      "s_name": "West Bengal",
      "pc_name": "Asansol",
      "mp": "Babul Supriyo",
      "gen": "m"
    },
    {
      "s_name": "West Bengal",
      "pc_name": "Baharampur",
      "mp": "Adhir Chowdhury",
      "gen": "m"
    },
    {
      "s_name": "West Bengal",
      "pc_name": "Balurghat",
      "mp": "Dr Sukanta Majumdar",
      "gen": "m"
    },
    {
      "s_name": "West Bengal",
      "pc_name": "Bangaon",
      "mp": "Shantanu Thakur",
      "gen": "m"
    },
    {
      "s_name": "West Bengal",
      "pc_name": "Bankura",
      "mp": "Dr Subhas Sarkar",
      "gen": "m"
    },
    {
      "s_name": "West Bengal",
      "pc_name": "Barasat",
      "mp": "Dr Kakoli Ghoshdastidar",
      "gen": "f"
    },
    {
      "s_name": "West Bengal",
      "pc_name": "Bardhaman-Durgapur",
      "mp": "Surendrajeet Ahluwalia",
      "gen": "m"
    },
    {
      "s_name": "West Bengal",
      "pc_name": "Bardhaman Purba",
      "mp": "Sunil Kumar Mondal",
      "gen": "m"
    },
    {
      "s_name": "West Bengal",
      "pc_name": "Barrackpore",
      "mp": "Arjun Singh",
      "gen": "m"
    },
    {
      "s_name": "West Bengal",
      "pc_name": "Basirhat",
      "mp": "Nusrat Jahan Ruhi",
      "gen": "f"
    },
    {
      "s_name": "West Bengal",
      "pc_name": "Birbhum",
      "mp": "Satabdi Roy",
      "gen": "f"
    },
    {
      "s_name": "West Bengal",
      "pc_name": "Bishnupur",
      "mp": "Khan Saumitra",
      "gen": "m"
    },
    {
      "s_name": "West Bengal",
      "pc_name": "Bolpur",
      "mp": "Asit Kumar Mal",
      "gen": "m"
    },
    {
      "s_name": "West Bengal",
      "pc_name": "Cooch Behar",
      "mp": "Nisith Pramanik",
      "gen": "m"
    },
    {
      "s_name": "West Bengal",
      "pc_name": "Darjeeling",
      "mp": "Raju Bista",
      "gen": "m"
    },
    {
      "s_name": "West Bengal",
      "pc_name": "Diamond Harbour",
      "mp": "Abhishek Banerjee",
      "gen": "m"
    },
    {
      "s_name": "West Bengal",
      "pc_name": "Dum Dum",
      "mp": "Saugata Roy",
      "gen": "m"
    },
    {
      "s_name": "West Bengal",
      "pc_name": "Ghatal",
      "mp": "Adhikari Deepak",
      "gen": "m"
    },
    {
      "s_name": "West Bengal",
      "pc_name": "Hooghly",
      "mp": "Locket Chatterjee",
      "gen": "f"
    },
    {
      "s_name": "West Bengal",
      "pc_name": "Howrah",
      "mp": "Prasun Banerjee",
      "gen": "m"
    },
    {
      "s_name": "West Bengal",
      "pc_name": "Jadavpur",
      "mp": "Mimi Chakraborty",
      "gen": "f"
    },
    {
      "s_name": "West Bengal",
      "pc_name": "Jalpaiguri",
      "mp": "Dr Jayanta Kumar",
      "gen": "m"
    },
    {
      "s_name": "West Bengal",
      "pc_name": "Jangipur",
      "mp": "Khalilur Rahaman",
      "gen": "m"
    },
    {
      "s_name": "West Bengal",
      "pc_name": "Jhargram",
      "mp": "Kunar Hembram",
      "gen": "m"
    },
    {
      "s_name": "West Bengal",
      "pc_name": "Jaynagar",
      "mp": "Pratima Mondal",
      "gen": "f"
    },
    {
      "s_name": "West Bengal",
      "pc_name": "Kanthi",
      "mp": "Adhikari Sisir",
      "gen": "m"
    },
    {
      "s_name": "West Bengal",
      "pc_name": "Kolkata Dakshin",
      "mp": "Mala Roy",
      "gen": "f"
    },
    {
      "s_name": "West Bengal",
      "pc_name": "Kolkata Uttar",
      "mp": "Bandyopadhyay Sudip",
      "gen": "m"
    },
    {
      "s_name": "West Bengal",
      "pc_name": "Krishnanagar",
      "mp": "Mahua Moitra",
      "gen": "f"
    },
    {
      "s_name": "West Bengal",
      "pc_name": "Maldaha Dakshin",
      "mp": "Abu Hasem",
      "gen": "m"
    },
    {
      "s_name": "West Bengal",
      "pc_name": "Maldaha Uttar",
      "mp": "Khagen Murmu",
      "gen": "m"
    },
    {
      "s_name": "West Bengal",
      "pc_name": "Mathurapur",
      "mp": "Choudhury Mohan Jatua",
      "gen": "m"
    },
    {
      "s_name": "West Bengal",
      "pc_name": "Medinipur",
      "mp": "Dilip Ghosh",
      "gen": "m"
    },
    {
      "s_name": "West Bengal",
      "pc_name": "Murshidabad",
      "mp": "Abu Taher Khan",
      "gen": "m"
    },
    {
      "s_name": "West Bengal",
      "pc_name": "Purulia",
      "mp": "Jyotirmay Singh Mahato",
      "gen": "m"
    },
    {
      "s_name": "West Bengal",
      "pc_name": "Raiganj",
      "mp": "Debasree Chaudhuri",
      "gen": "f"
    },
    {
      "s_name": "West Bengal",
      "pc_name": "Ranaghat",
      "mp": "Jagannath Sarkar",
      "gen": "m"
    },
    {
      "s_name": "West Bengal",
      "pc_name": "Sreerampur",
      "mp": "Kalyan Banerjee",
      "gen": "m"
    },
    {
      "s_name": "West Bengal",
      "pc_name": "Tamluk",
      "mp": "Adhikari Dibyendu",
      "gen": "m"
    },
    {
      "s_name": "West Bengal",
      "pc_name": "Uluberia",
      "mp": "Sajda Ahmed",
      "gen": "f"
    }
  ]


window.onload=function(){
    
    // section1();
    section0();

}