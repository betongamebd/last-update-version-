// ============================================
// ⚠️ ADMIN CONFIGURATION AREA
// ============================================
const CONFIG = {
    authScriptURL: "https://script.google.com/macros/s/AKfycbxu23YNqJbDImYa8SFexSz-1SWKRrgkjx2xEM1Dazo-jb8t1PHosE15qkK3b3zDl7g7yA/exec", 
    vipScriptURL: "https://script.google.com/macros/s/AKfycbx1XbbV0fxb0u6CJLYVx1ItygI-cjCKng4fetKTRNVvd0lO-YYjCOyFH3Jgsxy03NgHxA/exec",
    noticeText: "🚀 Welcome to ProToolsHub! 🔥 Get 50% OFF on Yearly Plan! ⚡ Instant Activation with Bkash/Nagad.",
    logoImageURL: "https://i.imgur.com/your-logo.png", 
    useImageLogo: false, 
    courses: [
        { title: "CPA Marketing", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80" },
        { title: "Ethical Hacking", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&q=80" },
        { title: "Advance Data Entry", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&q=80" },
        { title: "Python Automation", image: "https://images.unsplash.com/photo-1515879433056-bfab115c18e9?w=500&q=80" },
        { title: "Email Secret Master", image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=500&q=80" },
    ]
};

// ============================================
// 🔥 RAW DATA FROM YOUR FILES (NO CUTTING)
// ============================================
// --- User Agent Data (From update1 index.html) ---
const versions = {
    browser: { 'Chrome': '143.0.7559.31', 'Edge': '143.0.3650.96', 'Opera': '125.0.5729.49', 'Firefox': '146.0.1', 'Safari': '26.0' },
    social: { 'Facebook': '543.0.0.55.73', 'Instagram': '410.1.0.63.71', 'TikTok': '43.9.5', 'LinkedIn': '4.1.1152', 'Twitter': '11.49.1', 'Snapchat': '13.72.0.55', 'WhatsApp': '2.25.37.77', 'YouTube': '20.51.39', 'Reddit': '2025.50.2', 'Telegram': '12.3.0' }
};
const locales = { 'US': { code: 'en-US', iso: 'US' }, 'UK': { code: 'en-GB', iso: 'GB' }, 'CA': { code: 'en-CA', iso: 'CA' }, 'AU': { code: 'en-AU', iso: 'AU' } };
const deviceDB = {
    'Samsung': ['SM-S928B', 'SM-S928U', 'SM-S921B', 'SM-S918B', 'SM-G998B', 'SM-F946B', 'SM-A546B', 'SM-S948B'],
    'Google Pixel': ['Pixel 9 Pro', 'Pixel 9', 'Pixel 8 Pro', 'Pixel 8', 'Pixel 7 Pro'],
    'OnePlus': ['CPH2581', 'CPH2449', 'NE2210', 'LE2113'],
    'Motorola': ['motorola edge 50 ultra', 'motorola edge 40 pro', 'motorola razr 50 ultra', 'moto g stylus 5G (2025)', 'moto g power 5G (2025)', 'motorola edge 30 ultra'],
    'Xiaomi': ['2311DRK48C', '2211133G', 'M2102K1G'], 'Oppo': ['CPH2551', 'CPH2499', 'PGEM10'],
    'Vivo': ['V2308', 'V2250', 'V2219'], 'LG': ['LM-V600', 'LM-G900'],
    'Apple': ['iPhone17,1', 'iPhone17,2', 'iPhone17,3', 'iPhone17,4', 'iPhone16,2', 'iPhone15,3', 'iPhone14,7', 'iPhone14,2', 'iPhone14,3', 'iPhone13,2', 'iPhone12,1']
};
const countryBrands = { 'US': ['Samsung', 'Google Pixel', 'Motorola', 'OnePlus', 'Apple'], 'UK': ['Samsung', 'Google Pixel', 'Xiaomi', 'Oppo', 'Apple'], 'CA': ['Samsung', 'Google Pixel', 'LG', 'Motorola', 'Apple'], 'AU': ['Samsung', 'Google Pixel', 'Oppo', 'Vivo', 'Apple'] };

// --- Email Data (From email generator_index.html) ---
const maleNames = ["James", "John", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Thomas", "Charles", "Christopher", "Daniel", "Matthew", "Anthony", "Donald", "Mark", "Paul", "Steven", "Andrew", "Kenneth", "Joshua", "George", "Kevin", "Brian", "Edward", "Ronald", "Timothy", "Jason", "Jeffrey", "Ryan", "Jacob", "Gary", "Nicholas", "Eric", "Jonathan", "Stephen", "Larry", "Justin", "Scott", "Brandon", "Benjamin", "Samuel", "Frank", "Gregory", "Raymond", "Alexander", "Patrick", "Jack", "Dennis", "Jerry", "Tyler", "Aaron", "Jose", "Adam", "Henry", "Nathan", "Douglas", "Zachary", "Peter", "Kyle", "Walter", "Ethan", "Jeremy", "Harold", "Keith", "Christian", "Roger", "Noah", "Gerald", "Carl", "Terry", "Sean", "Austin", "Arthur", "Lawrence", "Jesse", "Dylan", "Bryan", "Joe", "Jordan", "Billy", "Bruce", "Albert", "Willie", "Gabriel", "Logan", "Alan", "Juan", "Wayne", "Roy", "Ralph", "Randy", "Eugene", "Vincent", "Russell", "Louis", "Philip", "Bobby", "Johnny", "Bradley", "Caleb"];
const femaleNames = ["Mary", "Patricia", "Jennifer", "Linda", "Elizabeth", "Barbara", "Susan", "Jessica", "Sarah", "Karen", "Nancy", "Lisa", "Margaret", "Betty", "Sandra", "Ashley", "Dorothy", "Kimberly", "Emily", "Donna", "Michelle", "Carol", "Amanda", "Melissa", "Deborah", "Stephanie", "Rebecca", "Laura", "Sharon", "Cynthia", "Kathleen", "Amy", "Shirley", "Angela", "Helen", "Anna", "Brenda", "Pamela", "Nicole", "Samantha", "Katherine", "Emma", "Ruth", "Christine", "Catherine", "Debra", "Rachel", "Carolyn", "Janet", "Virginia", "Maria", "Heather", "Diane", "Julie", "Joyce", "Evelyn", "Joan", "Victoria", "Kelly", "Christina", "Lauren", "Frances", "Martha", "Judith", "Cheryl", "Megan", "Andrea", "Olivia", "Ann", "Jean", "Alice", "Jacqueline", "Hannah", "Doris", "Kathryn", "Gloria", "Teresa", "Sara", "Janice", "Marie", "Julia", "Grace", "Judy", "Theresa", "Madison", "Beverly", "Denise", "Marilyn", "Amber", "Danielle"];
const titles = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin", "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson", "Walker", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores", "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell", "Carter", "Roberts", "Gomez", "Phillips", "Evans", "Turner", "Diaz", "Parker", "Cruz", "Edwards", "Collins", "Reyes", "Stewart", "Morris", "Morales", "Murphy", "Cook", "Rogers", "Gutierrez", "Ortiz", "Morgan", "Cooper", "Peterson", "Bailey", "Reed", "Kelly", "Howard", "Ramos", "Kim", "Cox", "Ward", "Richardson", "Watson", "Brooks", "Chavez", "Wood", "James", "Bennett", "Gray", "Mendoza", "Ruiz", "Hughes", "Price", "Alvarez", "Castillo", "Sanders", "Patel", "Myers", "Long", "Ross", "Foster", "Jimenez"];
const domains = ["gmail.com", "outlook.com", "yahoo.com", "hotmail.com", "icloud.com", "aol.com"];
const years = ["2020", "2021", "2022", "2023", "2024", "2025", "2026"];
const commonNumbers = ["123", "007", "101", "1", "99", "88", "55", "777", "24", "365"];

// --- Number Data (From number generator_index.html) ---
const countryData = {
    'us': { code: '+1', prefixes: ['212', '310', '415', '305', '702', '202', '312', '281', '718', '323', '646', '917'], digits: 7 },
    'uk': { code: '+44', prefixes: ['71', '72', '73', '74', '75', '77', '78', '79'], digits: 8 },
    'ca': { code: '+1', prefixes: ['416', '647', '604', '778', '514', '403', '905', '613', '587'], digits: 7 },
    'au': { code: '+61', prefixes: ['40', '41', '42', '43', '44', '45', '46', '47', '48'], digits: 7 },
    'de': { code: '+49', prefixes: ['151', '152', '157', '160', '162', '170', '171', '175', '176'], digits: 7 },
    'fr': { code: '+33', prefixes: ['6', '7'], digits: 8 },
    'bd': { code: '+880', prefixes: ['17', '13', '19', '14', '18', '16', '15'], digits: 8 }
};

// --- Address Data (From adress generator_index.html) ---
const addrData = {
    US: { zipFormat: "#####", states: { "California": ["Los Angeles", "San Francisco", "San Diego"], "New York": ["New York City", "Buffalo"], "Texas": ["Houston", "Dallas", "Austin"] } },
    UK: { zipFormat: "??# #??", states: { "England": ["London", "Manchester", "Birmingham"], "Scotland": ["Glasgow", "Edinburgh"] } },
    CA: { zipFormat: "?#? #?#", states: { "Ontario": ["Toronto", "Ottawa"], "Quebec": ["Montreal", "Quebec City"] } },
    AU: { zipFormat: "####", states: { "New South Wales": ["Sydney", "Newcastle"], "Victoria": ["Melbourne", "Geelong"] } }
};
const streets = ["Main St", "High St", "Church St", "King St", "Queen St", "Park Rd", "Victoria Rd", "Station Rd", "London Rd", "George St", "Broadway", "Maple Ave", "Oak St", "Washington St", "Lakeview Dr", "Sunset Blvd", "River Rd", "Pine St", "Cedar Ln", "Elm St", "5th Avenue"];

// HELPERS
const rnd = (arr) => arr[Math.floor(Math.random() * arr.length)];
const getBuild = () => rnd(['UP1A.231005.007', 'TP1A.220624.014', 'SP1A.210812.016', 'UKQ1.230924.001']);
const getChromeVer = () => `143.0.${Math.floor(Math.random()*5000)}.${Math.floor(Math.random()*150)}`;
function getRandomItem(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

// ============================================
// MAIN LOGIC STARTS
// ============================================
let isLoggedIn = false;
let currentTool = null;

window.onload = function() {
    setupSite();
    checkLoginStatus();
};

function setupSite() {
    const imgLogo = document.getElementById('imgLogo');
    const textLogo = document.getElementById('textLogo');
    if (CONFIG.useImageLogo && CONFIG.logoImageURL) { imgLogo.src = CONFIG.logoImageURL; imgLogo.classList.remove('hidden'); textLogo.classList.add('hidden'); } 
    else { imgLogo.classList.add('hidden'); textLogo.classList.remove('hidden'); }
    
    document.getElementById('noticeText').innerText = CONFIG.noticeText;

    const courseHTML = [...CONFIG.courses, ...CONFIG.courses].map(course => `
        <div class="marquee-item group relative">
            <img src="${course.image}" alt="${course.title}">
            <div class="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 p-3 text-center">
                <span class="font-bold text-white text-xs sm:text-sm whitespace-normal">${course.title}</span>
            </div>
        </div>
    `).join('');
    
    if(document.getElementById('publicCourseMarquee')) document.getElementById('publicCourseMarquee').innerHTML = courseHTML;
    if(document.getElementById('dashboardCourseMarquee')) document.getElementById('dashboardCourseMarquee').innerHTML = courseHTML;
}

function checkLoginStatus() {
    const user = JSON.parse(localStorage.getItem('proToolsUser'));
    if (user && user.isLoggedIn) {
        isLoggedIn = true;
        document.getElementById('home-section').classList.add('hidden');
        document.getElementById('dashboard-section').classList.remove('hidden');
        document.getElementById('menuPublic').classList.add('hidden');
        document.getElementById('menuPrivate').classList.remove('hidden');
        const navBtn = document.getElementById('navAuthBtn');
        navBtn.innerHTML = `<i class="ph ph-sign-out mr-1.5"></i> Logout`;
        navBtn.classList.replace('bg-white/10', 'bg-red-600');
        navBtn.onclick = logout;
        document.getElementById('dashUserName').innerText = user.name || "User";
        updatePlanBadge(user.plan);
    }
}

function updatePlanBadge(plan) {
    const badge = document.getElementById('userPlanBadge');
    const dashPlan = document.getElementById('dashUserPlan');
    const isPremium = (plan && plan !== 'Free');
    badge.innerText = isPremium ? "PREMIUM" : "FREE";
    badge.className = `hidden md:inline-block text-[10px] px-2 py-0.5 rounded border font-mono font-bold ${isPremium ? "text-green-400 border-green-500/20 bg-green-500/10" : "text-red-400 border-red-500/20 bg-red-500/10 animate-pulse"}`;
    badge.classList.remove('hidden');
    dashPlan.innerText = isPremium ? `${plan} ✅` : "Locked 🔒";
    dashPlan.className = isPremium ? "text-green-400 font-bold" : "text-red-400 font-bold";
    const iconClass = isPremium ? "ph-arrow-square-out text-green-400" : "ph-lock-key text-gray-500";
    ['ua', 'email', 'validator', 'number', 'address'].forEach(id => {
        const icon = document.getElementById(`lockIcon_${id}`);
        if(icon) icon.className = `ph ${iconClass} transition`;
    });
}

function checkAccess(toolId) {
    const user = JSON.parse(localStorage.getItem('proToolsUser'));
    if (!user || !user.isLoggedIn) { alert("Please login first!"); return; }
    if (!user.plan || user.plan === 'Free') { document.getElementById('lockModal').classList.remove('hidden'); } 
    else { loadTool(toolId); }
}

function redeemVipCode() {
    const codeInput = document.getElementById('vipCodeInput');
    const code = codeInput.value.trim();
    const user = JSON.parse(localStorage.getItem('proToolsUser'));
    if (!user || !user.isLoggedIn) { alert("Please login first!"); return; }
    if (!code) { alert("⚠️ Please enter a code!"); return; }
    const btn = document.querySelector('#vipCodeInput + button');
    const originalText = btn.innerText;
    btn.innerText = "Verifying...";
    btn.disabled = true;
    const data = new URLSearchParams();
    data.append('action', 'redeem');
    data.append('email', user.email);
    data.append('code', code);
    fetch(CONFIG.vipScriptURL, { method: 'POST', body: data }).then(res => res.json()).then(result => {
        if (result.result === 'success') {
            alert(`✅ Success! Plan Updated to: ${result.newPlan}`);
            user.plan = result.newPlan;
            localStorage.setItem('proToolsUser', JSON.stringify(user));
            updatePlanBadge(result.newPlan);
            document.getElementById('lockModal').classList.add('hidden');
            codeInput.value = "";
        } else { alert("❌ " + result.message); }
    }).catch(err => { alert("❌ Network/Server Error!"); console.error(err); }).finally(() => { btn.innerText = originalText; btn.disabled = false; });
}

// ============================================
// 🛠️ TOOL INTERFACES & LOGIC
// ============================================
function loadTool(toolId) {
    currentTool = toolId;
    const consoleDiv = document.getElementById('toolConsole');
    const title = document.getElementById('activeToolName');
    const output = document.getElementById('consoleOutput');
    const controls = document.getElementById('toolControls');
    
    consoleDiv.classList.remove('hidden');
    window.scrollTo({ top: consoleDiv.offsetTop - 100, behavior: 'smooth' });
    output.innerHTML = "";
    controls.innerHTML = "";

    // 1. UA GENERATOR (FULL UI)
    if(toolId === 'ua') {
        title.innerHTML = `<i class="ph-fill ph-mask-happy text-purple-400"></i> User Agent Generator`;
        output.innerHTML = `
            <div class="generator-grid">
                <div><label class="gen-label">Target Country</label><select id="uaCountry" class="gen-input" onchange="updateUABrands()"><option value="US">USA (en-US)</option><option value="UK">UK (en-GB)</option><option value="CA">Canada (en-CA)</option><option value="AU">Australia (en-AU)</option></select></div>
                <div><label class="gen-label">OS Platform</label><select id="uaOS" class="gen-input" onchange="updateUABrands()"><option value="Android">Android</option><option value="iOS">iOS</option><option value="Windows">Windows</option><option value="macOS">macOS</option><option value="Random">Random Mix</option></select></div>
                <div class="full-width"><label class="gen-label">Brand (Moto Fixed)</label><select id="uaBrand" class="gen-input"></select></div>
                <div><label class="gen-label">Environment</label><select id="uaEnv" class="gen-input" onchange="updateUAApps()"><option value="browser">Web Browser</option><option value="social">Social App</option></select></div>
                <div><label class="gen-label">Browser/App</label><select id="uaApp" class="gen-input" onchange="updateUAVersion()"></select></div>
                <div class="full-width"><label class="gen-label">Version (Locked)</label><input type="text" id="uaVersion" class="gen-input" readonly style="color: #666;"></div>
                <div><label class="gen-label">Quantity</label><input type="number" id="uaQty" class="gen-input" value="10" min="1" max="2000"></div>
            </div>
            <textarea id="uaResult" class="w-full h-32 bg-black/50 border border-white/10 rounded-lg p-3 mt-4 text-green-400 font-mono text-xs focus:outline-none" readonly placeholder="User Agents will appear here..."></textarea>
        `;
        controls.innerHTML = `<button onclick="runUAGenerator()" class="bg-purple-600 hover:bg-purple-500 text-white px-6 py-2 rounded-lg font-bold text-sm">Generate UAs</button>`;
        setTimeout(() => { updateUABrands(); updateUAApps(); }, 100);
    }
    // 2. EMAIL GENERATOR (Random Pattern Logic Integrated)
    else if(toolId === 'email') {
        title.innerHTML = `<i class="ph-fill ph-envelope-open text-orange-400"></i> Email Generator`;
        output.innerHTML = `
            <div class="generator-grid">
                <div class="full-width"><label class="gen-label">Quantity (Max 5000)</label><input type="number" id="emailQty" class="gen-input" value="50" min="1" max="5000"></div>
            </div>
            <textarea id="emailResult" class="w-full h-48 bg-black/50 border border-white/10 rounded-lg p-3 mt-4 text-green-400 font-mono text-xs focus:outline-none" readonly placeholder="Generated emails..."></textarea>
        `;
        controls.innerHTML = `<button onclick="runEmailGenerator()" class="bg-purple-600 hover:bg-purple-500 text-white px-6 py-2 rounded-lg font-bold text-sm">Generate Emails</button>`;
    }
    // 3. VALIDATOR
    else if(toolId === 'validator') {
        title.innerHTML = `<i class="ph-fill ph-shield-check text-green-400"></i> Email Validator`;
        output.innerHTML = `<textarea id="validInput" class="w-full h-24 bg-black/50 border border-white/10 rounded-lg p-3 text-white font-mono text-xs focus:outline-none" placeholder="Paste emails here (one per line)..."></textarea><div class="mt-4 h-40 overflow-y-auto"><table class="val-table"><thead><tr><th>Email</th><th>Status</th><th>Result</th></tr></thead><tbody id="validResult"></tbody></table></div>`;
        controls.innerHTML = `<button onclick="runEmailValidator()" class="bg-purple-600 hover:bg-purple-500 text-white px-6 py-2 rounded-lg font-bold text-sm">Check MX Records</button>`;
    }
    // 4. NUMBER GENERATOR
    else if(toolId === 'number') {
        title.innerHTML = `<i class="ph-fill ph-device-mobile text-purple-400"></i> Number Generator`;
        output.innerHTML = `<div class="generator-grid"><div><label class="gen-label">Country</label><select id="numCountry" class="gen-input"><option value="us">USA (+1)</option><option value="uk">UK (+44)</option><option value="bd">Bangladesh (+880)</option><option value="ca">Canada (+1)</option><option value="au">Australia (+61)</option><option value="de">Germany (+49)</option><option value="fr">France (+33)</option></select></div><div><label class="gen-label">Quantity</label><input type="number" id="numQty" class="gen-input" value="50"></div></div><textarea id="numResult" class="w-full h-40 bg-black/50 border border-white/10 rounded-lg p-3 mt-4 text-green-400 font-mono text-xs focus:outline-none" readonly></textarea>`;
        controls.innerHTML = `<button onclick="runNumberGenerator()" class="bg-purple-600 hover:bg-purple-500 text-white px-6 py-2 rounded-lg font-bold text-sm">Generate Numbers</button>`;
    }
    // 5. ADDRESS GENERATOR
    else if(toolId === 'address') {
        title.innerHTML = `<i class="ph-fill ph-map-pin text-yellow-400"></i> Address Generator`;
        output.innerHTML = `
            <div class="generator-grid">
                <div><label class="gen-label">Country</label><select id="addrCountry" class="gen-input" onchange="loadStates()"><option value="">-- Select Country --</option><option value="US">United States</option><option value="UK">United Kingdom</option><option value="CA">Canada</option><option value="AU">Australia</option></select></div>
                <div><label class="gen-label">State/Region</label><select id="addrState" class="gen-input" onchange="loadCities()"><option value="">Any State / Region</option></select></div>
                <div class="full-width"><label class="gen-label">City</label><select id="addrCity" class="gen-input"><option value="">Any City</option></select></div>
                <div><label class="gen-label">Quantity</label><input type="number" id="addrQty" class="gen-input" value="5"></div>
            </div>
            <div id="addrResult" class="mt-4 space-y-2 h-40 overflow-y-auto text-xs text-gray-300"></div>
        `;
        controls.innerHTML = `<button onclick="runAddressGenerator()" class="bg-purple-600 hover:bg-purple-500 text-white px-6 py-2 rounded-lg font-bold text-sm">Generate Addresses</button>`;
    }
}

// === EXACT LOGIC FUNCTIONS (COPIED FROM YOUR FILES) ===
function updateUABrands() {
    const os = document.getElementById('uaOS').value;
    const c = document.getElementById('uaCountry').value;
    const b = document.getElementById('uaBrand');
    b.innerHTML = '';
    if(os === 'Android') {
        let list = countryBrands[c] || countryBrands['US'];
        list.forEach(x => b.add(new Option(x, x)));
        b.add(new Option('Random', 'Random'));
    } else if (os === 'iOS') {
        b.add(new Option('Apple', 'Apple'));
    } else {
        b.add(new Option('PC/Mac', 'PC'));
    }
}

function updateUAApps() {
    const env = document.getElementById('uaEnv').value;
    const app = document.getElementById('uaApp');
    app.innerHTML = '';
    let list = env === 'browser' ? versions.browser : versions.social;
    Object.keys(list).forEach(k => app.add(new Option(k, k)));
    app.add(new Option('Random', 'Random'));
    updateUAVersion();
}

function updateUAVersion() {
    const env = document.getElementById('uaEnv').value;
    const app = document.getElementById('uaApp').value;
    const ver = document.getElementById('uaVersion');
    ver.value = (app === 'Random') ? 'Mixed' : (env === 'browser' ? versions.browser[app] : versions.social[app]);
}

function runUAGenerator() {
    const qty = parseInt(document.getElementById('uaQty').value);
    const sCountry = document.getElementById('uaCountry').value;
    const sOS = document.getElementById('uaOS').value;
    const sBrand = document.getElementById('uaBrand').value;
    const sEnv = document.getElementById('uaEnv').value;
    const sApp = document.getElementById('uaApp').value;

    const loc = locales[sCountry].code;
    let output = new Set();
    let safe = 0;

    while(output.size < qty && safe < qty * 20) {
        safe++;
        let os = sOS === 'Random' ? rnd(['Android', 'iOS', 'Windows', 'macOS']) : sOS;
        let brand = sBrand;
        if(os === 'Android') {
            if(sOS === 'Random') brand = rnd(countryBrands['US'].filter(x=>x!=='Apple'));
            else if(brand === 'Random') brand = rnd(countryBrands[sCountry].filter(x=>x!=='Apple'));
        }
        
        let model = (os === 'Android') ? rnd(deviceDB[brand] || deviceDB['Samsung']) : rnd(deviceDB['Apple']);
        let appKeys = sEnv === 'browser' ? Object.keys(versions.browser) : Object.keys(versions.social);
        let app = sApp === 'Random' ? rnd(appKeys) : sApp;
        let ver = sEnv === 'browser' ? versions.browser[app] : versions.social[app];

        let androidVer = rnd(['12', '13', '14']); 
        let build = getBuild();
        let cv = getChromeVer();
        let iosVer = rnd(['18_3_2', '18_2_1', '17_5_1']); 
        
        let ua = "";

        if(os === 'Android') {
            let baseWv = `Mozilla/5.0 (Linux; Android ${androidVer}; ${model} Build/${build}; wv)`;
            let baseBrowser = `Mozilla/5.0 (Linux; Android ${androidVer}; ${model} Build/${build})`;

            if(sEnv === 'browser') {
                if(app === 'Chrome') ua = `${baseBrowser} AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${ver} Mobile Safari/537.36`;
                else if(app === 'Firefox') ua = `Mozilla/5.0 (Android ${androidVer}; Mobile; ${model} Build/${build}; rv:146.0) Gecko/146.0 Firefox/${ver}`;
                else if(app === 'Edge') ua = `${baseBrowser} AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${cv} Mobile Safari/537.36 EdgA/${ver}`;
                else if(app === 'Opera') ua = `${baseBrowser} AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${cv} Mobile Safari/537.36 OPR/${ver}`;
            } else {
                let webviewCore = `${baseWv} AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/${cv} Mobile Safari/537.36`;
                if(app === 'Facebook') ua = `${webviewCore} [FB_IAB/FB4A;FBAV/${ver};FBLC/${loc};FBMF/${brand};FBDV/${model};FBSV/${androidVer};]`;
                else ua = `${webviewCore} ${app}/${ver}`;
            }
        } 
        else if (os === 'iOS') {
            if(sEnv === 'browser') {
                if(app === 'Safari') ua = `Mozilla/5.0 (${model}; CPU iPhone OS ${iosVer} like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/${ver} Mobile/15E148 Safari/604.1`;
                else ua = `Mozilla/5.0 (${model}; CPU iPhone OS ${iosVer} like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/${ver} Mobile/15E148 Safari/604.1`;
            } else {
                ua = `Mozilla/5.0 (${model}; CPU iPhone OS ${iosVer} like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 ${app}/${ver}`;
            }
        }
        else { 
            let sys = os === 'Windows' ? `Windows NT ${rnd(['10.0', '11.0'])}` : `Macintosh; Intel Mac OS X ${rnd(['14_5', '15_1'])}`;
            ua = `Mozilla/5.0 (${sys}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${ver} Safari/537.36`;
        }

        if(ua) output.add(ua);
    }
    document.getElementById('uaResult').value = Array.from(output).join('\n');
}

function runEmailGenerator() {
    const qty = parseInt(document.getElementById('emailQty').value);
    const outputField = document.getElementById('emailResult');
    
    if (!qty || qty <= 0) {
        alert("Please enter a valid quantity.");
        return;
    }

    let results = [];
    let uniqueEmails = new Set();
    let attempts = 0;
    let maxAttempts = qty * 10;

    while (results.length < qty && attempts < maxAttempts) {
        attempts++;

        const isMale = Math.random() < 0.5;
        const genderLabel = isMale ? "male" : "female";
        const firstName = isMale ? getRandomItem(maleNames) : getRandomItem(femaleNames);
        const lastName = getRandomItem(titles);

        let username = "";
        const pattern = Math.floor(Math.random() * 4); // Random Pattern 0-3 (Matching your file)

        const cleanFirst = firstName.toLowerCase();
        const cleanLast = lastName.toLowerCase();
        const randomYear = getRandomItem(years);
        const randomNumber = getRandomItem(commonNumbers);

        if (pattern === 0) {
            username = cleanFirst + cleanLast;
        } else if (pattern === 1) {
            username = cleanFirst + "." + cleanLast;
        } else if (pattern === 2) {
            username = cleanFirst + cleanLast + randomYear;
        } else {
            username = cleanFirst + cleanLast + randomNumber;
        }

        const domain = getRandomItem(domains);
        const fullEmail = `${username}@${domain}`;

        if (!uniqueEmails.has(fullEmail)) {
            uniqueEmails.add(fullEmail);
            const formattedLine = `${genderLabel} : ${firstName} ${lastName} : ${fullEmail}`;
            results.push(formattedLine);
        }
    }
    outputField.value = results.join('\n');
}

async function runEmailValidator() {
    const raw = document.getElementById('validInput').value;
    const emails = raw.split('\n').filter(e => e.trim());
    const tbody = document.getElementById('validResult');
    tbody.innerHTML = '';
    
    for(let email of emails) {
        let domain = email.split('@')[1];
        let isValid = false;
        try {
            let res = await fetch(`https://cloudflare-dns.com/dns-query?name=${domain}&type=MX`, { headers: { 'Accept': 'application/dns-json' } });
            let data = await res.json();
            if(data.Answer && data.Answer.length > 0) isValid = true;
        } catch(e) {}
        
        const statusHTML = isValid ? '<span class="status-valid">MX Record Found</span>' : '<span class="status-invalid">No MX Record</span>';
        const resultText = isValid ? 'Valid Domain' : 'Invalid/Unreachable';
        
        tbody.innerHTML += `<tr><td>${email}</td><td>${statusHTML}</td><td>${resultText}</td></tr>`;
    }
}

function runNumberGenerator() {
    const country = document.getElementById('numCountry').value;
    const qty = parseInt(document.getElementById('numQty').value);
    const conf = countryData[country];
    let uniqueNumbers = new Set();
    
    while(uniqueNumbers.size < qty) {
        let prefix = rnd(conf.prefixes);
        let body = "";
        for (let i = 0; i < conf.digits; i++) {
            body += Math.floor(Math.random() * 10);
        }
        uniqueNumbers.add(`${conf.code}${prefix}${body}`);
    }
    document.getElementById('numResult').value = Array.from(uniqueNumbers).join('\n');
}

// === ADDRESS GENERATOR LOGIC (EXACT COPY WITH DROPDOWNS) ===
function loadStates() {
    const countrySelect = document.getElementById("addrCountry").value;
    const stateSelect = document.getElementById("addrState");
    const citySelect = document.getElementById("addrCity");
    
    stateSelect.innerHTML = '<option value="">Any State / Region</option>';
    citySelect.innerHTML = '<option value="">Any City</option>';

    if (countrySelect && addrData[countrySelect]) {
        const states = Object.keys(addrData[countrySelect].states).sort();
        states.forEach(state => {
            const option = document.createElement("option");
            option.value = state;
            option.text = state;
            stateSelect.appendChild(option);
        });
    }
}

function loadCities() {
    const countrySelect = document.getElementById("addrCountry").value;
    const stateSelect = document.getElementById("addrState").value;
    const citySelect = document.getElementById("addrCity");

    citySelect.innerHTML = '<option value="">Any City</option>';

    if (countrySelect && stateSelect && addrData[countrySelect].states[stateSelect]) {
        const cities = addrData[countrySelect].states[stateSelect].sort();
        cities.forEach(city => {
            const option = document.createElement("option");
            option.value = city;
            option.text = city;
            citySelect.appendChild(option);
        });
    }
}

function runAddressGenerator() {
    const country = document.getElementById('addrCountry').value;
    const selectedState = document.getElementById('addrState').value;
    const selectedCity = document.getElementById('addrCity').value;
    const qty = parseInt(document.getElementById('addrQty').value);
    const div = document.getElementById('addrResult');
    
    if (!country) { alert("Please select a country first."); return; }
    
    div.innerHTML = '';
    const conf = addrData[country];
    
    for(let i=0; i<qty; i++) {
        let finalState = selectedState;
        let finalCity = selectedCity;

        if (!finalState) finalState = rnd(Object.keys(conf.states));
        if (!finalCity) finalCity = rnd(conf.states[finalState]);

        let streetName = rnd(streets);
        let streetNum = Math.floor(Math.random() * 999) + 1;
        
        function generateZip(format) {
            const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            return format.replace(/#/g, () => Math.floor(Math.random() * 10))
                         .replace(/\?/g, () => letters.charAt(Math.floor(Math.random() * letters.length)));
        }
        
        let zip = generateZip(conf.zipFormat);
        
        const cardHTML = `
            <div class="p-3 bg-white/5 rounded border border-white/5 mb-2 font-mono text-xs">
                <strong class="text-purple-400">Address #${i + 1}</strong><br>
                <span class="text-gray-300">
                ${streetNum} ${streetName}<br>
                ${finalCity}, ${finalState} ${zip}<br>
                ${country}
                </span>
            </div>
        `;
        div.innerHTML += cardHTML;
    }
}

// === AUTH FUNCTIONS ===
function showSection(sectionId) { if(sectionId === 'dashboard' && isLoggedIn) { document.getElementById('home-section').classList.add('hidden'); document.getElementById('dashboard-section').classList.remove('hidden'); window.scrollTo(0,0); } }
function scrollToPricing() { document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' }); }
function openAuthModal(planInfo = 'Free') { if(isLoggedIn) return; document.getElementById('authModal').classList.remove('hidden'); document.getElementById('selectedPlan').value = planInfo; if (planInfo !== 'Free') switchTab('register'); else switchTab('login'); }
function closeAuthModal() { document.getElementById('authModal').classList.add('hidden'); document.getElementById('authMessage').classList.add('hidden'); }
function switchTab(tab) { const loginForm = document.getElementById('loginForm'); const registerForm = document.getElementById('registerForm'); const tabLogin = document.getElementById('tabLogin'); const tabRegister = document.getElementById('tabRegister'); if (tab === 'login') { loginForm.classList.remove('hidden'); registerForm.classList.add('hidden'); tabLogin.className = "flex-1 py-4 text-sm font-bold text-white border-b-2 border-purple-500 bg-white/5"; tabRegister.className = "flex-1 py-4 text-sm font-bold text-gray-400 hover:text-white"; } else { loginForm.classList.add('hidden'); registerForm.classList.remove('hidden'); tabRegister.className = "flex-1 py-4 text-sm font-bold text-white border-b-2 border-purple-500 bg-white/5"; tabLogin.className = "flex-1 py-4 text-sm font-bold text-gray-400 hover:text-white"; } }
function handleAuth(event, action) { event.preventDefault(); const form = event.target; const formData = new FormData(form); const msgDiv = document.getElementById('authMessage'); const btn = form.querySelector('button[type="submit"]'); const originalText = btn.innerText; btn.innerText = "Processing..."; btn.disabled = true; msgDiv.classList.add('hidden'); const data = new URLSearchParams(); data.append('action', action); for (const pair of formData) data.append(pair[0], pair[1]); fetch(CONFIG.authScriptURL, { method: 'POST', body: data }).then(res => res.json()).then(result => { msgDiv.classList.remove('hidden'); if (result.result === 'success') { msgDiv.className = "px-8 pb-6 text-center text-xs font-bold text-green-400"; msgDiv.innerText = result.message; if (action === 'login') { const userData = { isLoggedIn: true, name: result.userData?.name, email: result.userData?.email, plan: result.userData?.plan || "Free" }; localStorage.setItem('proToolsUser', JSON.stringify(userData)); setTimeout(() => { closeAuthModal(); location.reload(); }, 1000); } else { form.reset(); setTimeout(() => { switchTab('login'); msgDiv.innerText = "Payment Sent! Please Login."; }, 2000); } } else { msgDiv.className = "px-8 pb-6 text-center text-xs font-bold text-red-400"; msgDiv.innerText = result.message; } }).catch(err => { msgDiv.innerText = "Connection Failed."; }).finally(() => { btn.innerText = originalText; btn.disabled = false; }); }
function logout() { localStorage.removeItem('proToolsUser'); location.reload(); }
