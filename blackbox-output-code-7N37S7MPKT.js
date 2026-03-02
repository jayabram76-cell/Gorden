/* --- Database Resep (Data) --- */
const recipes = [
    {
        id: 1,
        name: "Rendang Daging Sapi",
        type: "Makanan",
        image: "https://images.unsplash.com/photo-1599043513900-489f22695880?auto=format&fit=crop&w=600&q=80",
        ingredients: [
            "1 kg daging sapi (potong tebal)",
            "1 liter santan kental",
            "200 ml santan encer",
            "4 lembar daun salam",
            "2 lembar daun kunyit",
            "1 batang serai (geprek)",
            "Bumbu halus: 8 siung bawang merah, 5 siung bawang putih, 1 sdm ketumbar, 1 sdt jintan, 5 buah cabe merah besar, jahe, kunyit, dan lengkuas"
        ],
        tools: [
            "Panci besar (pressure cooker lebih baik)",
            "Cobek atau blender",
            "Sendok kayu"
        ],
        steps: [
            "Tumis bumbu halus hingga harum.",
            "Masukkan daging sapi, aduk hingga berubah warna.",
            "Tuang santan kental, daun salam, serai, dan daun kunyit.",
            "Masak dengan api kecil selama 2-3 jam (atau hingga empuk dan kering) sambil terus diaduk agar tidak gosong.",
            "Jika sudah kering dan berminyak, rendang siap dihidangkan."
        ]
    },
    {
        id: 2,
        name: "Soto Ayam Lamongan",
        type: "Makanan",
        image: "https://images.unsplash.com/photo-1626804475297-411dbe0a825e?auto=format&fit=crop&w=600&q=80",
        ingredients: [
            "1 ekor ayam (potong 4)",
            "2 liter air",
            "Bumbu halus: 6 siung bawang merah, 4 siung bawang putih, kunyit, jahe, merica",
            "2 lembar daun salam, 2 lembar daun jeruk",
            "1 batang serai",
            "Telur rebus, bihun, kol, daun seledri, bawang goreng"
        ],
        tools: [
            "Panci besar",
            "Saringan (soup strainer)",
            "Mangkuk saji"
        ],
        steps: [
            "Rebus ayam dengan air mendidih hingga matang. Angkat dan suwir-suwir dagingnya.",
            "Tumis bumbu halus hingga harum, lalu masukkan ke dalam kaldu ayam.",
            "Tambahkan daun salam, serai, dan daun jeruk. Masak selama 15 menit.",
            "Saring kuah Soto agar bersih.",
            "Sajikan dengan nasi, ayam suwir, bihun, kol, telur rebus, dan taburan bawang goreng."
        ]
    },
    {
        id: 3,
        name: "Es Teh Manis",
        type: "Minuman",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80",
        ingredients: [
            "2 kantong teh celup (bisa teh hitam atau melati)",
            "200 ml air panas",
            "2-3 sdm gula pasir (sesuai selera)",
            "Es batu secukupnya",
            "200 ml air matang dingin"
        ],
        tools: [
            "Gelas",
            "Sedotan",
            "Panci (untuk memanaskan air)"
        ],
        steps: [
            "Masukkan kantong teh ke dalam air panas. Diamkan selama 3-5 menit.",
            "Angkat kantong teh, tambahkan gula, aduk hingga larut.",
            "Diamkan hingga suhu ruang, lalu masukkan ke kulkas agar dingin atau langsung tambahkan es batu.",
            "Tuang ke dalam gelas yang sudah berisi es batu.",
            "Aduk perlahan dan hidangkan."
        ]
    },
    {
        id: 4,
        name: "Nasi Goreng Special",
        type: "Makanan",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80",
        ingredients: [
            "2 piring nasi putih (sebelumnya didinginkan)",
            "2 sdm kecap manis",
            "1 sdm kecap asin",
            "1 sdm minyak wijen",
            "Bumbu halus: 3 cabe merah, 2 bawang merah, 2 bawang putih",
            "Telur, ayam suwir, kerupuk"
        ],
        tools: [
            "Wajan besar",
            "Spatula",
            "Piring saji"
        ],
        steps: [
            "Panaskan minyak, tumis bumbu halus hingga harum.",
            "Masukkan nasi, aduk cepat dengan api besar.",
            "Tambahkan kecap manis, asin, dan minyak wijen. Aduk hingga warna merata.",
            "Goreng telur mata sapi di sampingnya.",
            "Sajikan nasi goreng dengan telur, ayam suwir, dan kerupuk."
        ]
    },
    {
        id: 5,
        name: "Gudeg Yogyakarta",
        type: "Makanan",
        image: "https://images.unsplash.com/photo-1598511726623-d2e9996e2b46?auto=format&fit=crop&w=600&q=80",
        ingredients: [
            "1 kg nangka muda (potong kecil)",
            "1 liter santan kental",
            "500 ml air kelapa muda",
            "5 lembar daun salam",
            "2 lengkuas",
            "Gula merah secukupnya",
            "Bumbu halus: cabe merah, bawang merah, bawang putih, kemiri"
        ],
        tools: [
            "Kendi tanah liat (atau panci biasa)",
            "Cobek"
        ],
        steps: [
            "Rebus nangka muda dengan air kelapa muda dan daun salam hingga empuk.",
            "Tambahkan santan dan gula merah.",
            "Masukkan bumbu halus, aduk perlahan.",
            "Masak dengan api sangat kecil selama berjam-jam (sampai berubah warna cokelat pekat).",
            "Sajikan dengan nasi putih, ayam kampung, dan kerupuk."
        ]
    },
    {
        id: 6,
        name: "Es Cendol",
        type: "Minuman",
        image: "https