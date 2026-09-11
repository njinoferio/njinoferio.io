const projects = {
  'Paramnesia': { detail: 'A psychological horror game made in Unity, built around unsettling discoveries and atmosphere.', url: '', image: '' },
  'Scars of Harpuia': { detail: 'A multiplayer project focused on shared adventure and player connection.', url: '', image: '' },
  'Mythos Manuscripts': { detail: 'An educational game that turns folklore and learning into something interactive.', url: '', image: '' },
  'Bounce': { detail: 'A compact Unreal physics experiment focused on movement that feels great.', url: '', image: '' },
  'QuestLog': { detail: 'A web-hosted community concept for players to gather, share, and connect.', url: '', image: '' },
  'Local Multiplayer Tic-Tac-Toe': { detail: 'A locally hosted Unity multiplayer game designed for shared play.', url: '', image: '' },
  'Text Based Fighting Game': { detail: 'A command-line fighting game built with the C programming language.', url: '', image: '' },
  'Text Based Tic-Tac-Toe': { detail: 'A classic Tic-Tac-Toe game implemented in C.', url: '', image: '' },
  'Text Based Bank Simulator': { detail: 'A text-based banking simulation built with C.', url: '', image: '' },
  'Elden Rouge': { detail: 'A C++ project exploring gameplay through code.', url: '', image: '' },
  'Nomorod': { detail: 'A text-based, turn-based C++ creature-battling adventure inspired by classic monster-collection games.', url: '', image: '' },
  'Personal OpenGL Game Engine': { detail: 'A personal game engine built from the ground up with OpenGL, C++, and CMake.', url: '', image: '' },
  'Mailers Mailroom': { detail: 'An in-progress Unity project currently being developed.', url: '', image: '' },
  'Kandili Sanctuary': { detail: 'An in-progress Unity project currently being developed.', url: '', image: '' }
};

const pages = [...document.querySelectorAll('.page')];
const tabs = [...document.querySelectorAll('[data-go]')];
const pageCount = document.getElementById('page-count');
const pageNames = ['COVER', 'ABOUT', 'GAMES', 'BADGES', 'CONTACT'];
pages.forEach((page, index) => { page.dataset.tab = pageNames[index]; });
document.querySelector('.author-card')?.remove();
document.querySelector('.author-page .page-kicker').textContent = '01 / ABOUT ME';
document.querySelector('.projects-page .page-kicker').textContent = '02 / PROJECTS';
document.querySelector('.projects-page .page-heading h2').innerHTML = 'Projects.';
document.querySelector('.projects-page .corner-stamp').textContent = 'SELECTED PROJECTS';
document.querySelector('.stats-page .page-kicker').textContent = '03 / SKILLS & CREDENTIALS';
document.querySelector('.stats-page h2').innerHTML = 'Capabilities,<br />tools & craft.';
document.querySelector('.stats-page .stats-intro').textContent = 'A balance of game development, creative direction, and practical technology.';
document.querySelector('.cover-intro').textContent = 'I’m drawn to cozy, chill games that feel like a fun escape from everyday life. I build playful worlds where people can unwind, explore, and enjoy the moment.';
document.querySelector('.author-note h2').textContent = 'I build game experiences with intention and curiosity.';
document.querySelectorAll('.author-note > p:not(.hand-note)')[0].textContent = 'I am a game developer and pixel artist drawn to expressive worlds, satisfying systems, and details that invite players to stay curious.';
document.querySelectorAll('.author-note > p:not(.hand-note)')[1].textContent = 'I believe it is never too late to try something new, and there is always room to learn, refine, and improve.';
document.querySelector('.projects-page .page-heading p').textContent = 'A selection of game, programming, and community-focused projects I enjoyed bringing to life.';
document.querySelector('.contact-copy h2').innerHTML = 'Let’s create<br />something memorable.';
document.querySelector('.contact-copy > p:not(.hand-note)').textContent = 'Have a project, collaboration, or opportunity in mind? I would be happy to hear from you.';
document.querySelector('[data-go="1"]').textContent = 'About me';
document.querySelector('[data-go="2"]').textContent = 'Projects';
const categories = {
  'Paramnesia': 'PSYCHOLOGICAL HORROR',
  'Scars of Harpuia': 'MULTIPLAYER · IN PROGRESS',
  'Mythos Manuscripts': 'EDUCATIONAL',
  'Bounce': 'PHYSICS',
  'QuestLog': 'COMMUNITY PLATFORM',
  'Local Multiplayer Tic-Tac-Toe': 'LOCAL MULTIPLAYER',
  'Mailers Mailroom': 'IN PROGRESS',
  'Text Based Fighting Game': 'COMMAND-LINE COMBAT',
  'Text Based Tic-Tac-Toe': 'CLASSIC BOARD GAME',
  'Text Based Bank Simulator': 'SIMULATION',
  'Elden Rouge': 'PROGRAMMING PROJECT',
  'Nomorod': 'TEXT-BASED TURN-BASED ADVENTURE',
  'Personal OpenGL Game Engine': 'CUSTOM GAME ENGINE',
  'Kandili Sanctuary': 'IN PROGRESS'
};
window.addEventListener('load', () => {
  setTimeout(() => document.body.classList.replace('loading', 'opened'), 180);
});
let current = 0;
let turning = false;

function showPage(index) {
  const nextIndex = (index + pages.length) % pages.length;
  if (turning || nextIndex === current) return;
  turning = true;
  const outgoing = pages[current];
  outgoing.classList.add('flipping-out');
  setTimeout(() => {
    outgoing.classList.remove('active', 'flipping-out');
    pages[nextIndex].classList.add('active', 'flipping-in');
    current = nextIndex;
    tabs.forEach(tab => tab.classList.toggle('selected', Number(tab.dataset.go) === current));
    pageCount.textContent = `PAGE ${current + 1} OF ${pages.length} · ${pageNames[current]}`;
    setTimeout(() => { pages[current].classList.remove('flipping-in'); turning = false; }, 380);
  }, 500);
  document.querySelector('.page-window').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function makeExtraCard(title, type, engine, letter, target = document.querySelector('.project-grid')) {
  const card = document.createElement('article');
  card.className = 'game-card sage';
  card.innerHTML = `<span>${engine}</span><div><p>${type}</p><h3>${title}</h3><small>Part of the complete collection.</small></div><b>${letter}</b>`;
  target.append(card);
  return card;
}

makeExtraCard('Local Multiplayer Tic-Tac-Toe', 'LOCAL MULTIPLAYER', 'UNITY / 04', 'T');
makeExtraCard('Text Based Fighting Game', 'C LANGUAGE', 'CODE / 01', 'F');
makeExtraCard('Text Based Tic-Tac-Toe', 'C LANGUAGE', 'CODE / 02', 'T');
makeExtraCard('Text Based Bank Simulator', 'C LANGUAGE', 'CODE / 03', 'B');
makeExtraCard('Elden Rouge', 'C++ LANGUAGE', 'CODE / 04', 'E');
makeExtraCard('Nomorod', 'C++ LANGUAGE', 'CODE / 05', 'N');
makeExtraCard('Personal OpenGL Game Engine', 'CUSTOM GAME ENGINE', 'ENGINE / 01', 'G');
document.querySelectorAll('.game-card').forEach(card => {
  if (card.querySelector('h3')?.textContent.trim() === 'Tower Defense') card.remove();
});
const pastProjects = document.querySelector('.project-grid');
const inProgress = document.createElement('section');
inProgress.className = 'in-progress-section';
inProgress.innerHTML = '<p class="page-kicker">IN PROGRESS / CURRENTLY BUILDING</p><h3>Still in the workshop.</h3><div class="project-grid in-progress-grid"></div>';
pastProjects.before(inProgress);
const scarsCard = [...pastProjects.querySelectorAll('.game-card')].find(card => card.querySelector('h3')?.textContent.trim() === 'Scars of Harpuia');
if (scarsCard) inProgress.querySelector('.in-progress-grid').append(scarsCard);
makeExtraCard('Mailers Mailroom', 'UNITY · IN PROGRESS', 'UNITY / 05', 'M', inProgress.querySelector('.in-progress-grid'));
makeExtraCard('Kandili Sanctuary', 'UNITY · IN PROGRESS', 'UNITY / 06', 'K', inProgress.querySelector('.in-progress-grid'));
document.querySelector('.archive')?.remove();
const skillList = document.querySelector('.skill-list');
skillList.innerHTML = [
  ['GAME ENGINES', 'Unity · Unreal'],
  ['PROGRAMMING LANGUAGES', 'C · C++ · C# · Java · JavaScript'],
  ['WEB TECHNOLOGIES', 'HTML · CSS · React · JSON'],
  ['GRAPHICS & DEVELOPMENT', 'OpenGL · CMake'],
  ['DESIGN & CREATIVE TOOLS', 'Figma · Pixel art · Animation · Image & video design']
].map(([label, value]) => `<div><span>${label}</span><b>${value}</b></div>`).join('');
const credentials = document.querySelector('.badges');
if (credentials) {
  credentials.className = 'credentials-list';
  credentials.innerHTML = `<p class="credential-eyebrow">CREDENTIALS</p><h3>Development foundations</h3><div class="credential-grid"><figure><img src="cert1.png" alt="Unity Junior Programmer certification" /><figcaption>Unity Junior Programmer</figcaption></figure><figure><img src="cert2.png" alt="Unity Essentials certification" /><figcaption>Unity Essentials</figcaption></figure></div>`;
}
const pastDivider = document.createElement('div');
pastDivider.className = 'past-divider';
pastProjects.before(pastDivider);
const inProgressCount = inProgress.querySelector('.in-progress-grid').children.length;
const pastCount = pastProjects.children.length;
inProgress.querySelector('h3').textContent = `${inProgressCount} project${inProgressCount === 1 ? '' : 's'} in the workshop.`;
pastDivider.innerHTML = `<p class="page-kicker">PAST PROJECTS / COMPLETED COLLECTION</p><h3>${pastCount} completed projects.</h3>`;
document.querySelector('.corner-stamp').textContent = `${inProgressCount} IN PROGRESS · ${pastCount} PAST`;

const techLabels = {
  'Paramnesia': 'UNITY',
  'Mythos Manuscripts': 'UNITY',
  'Bounce': 'UNREAL',
  'QuestLog': 'CSS · REACT · JSON',
  'Local Multiplayer Tic-Tac-Toe': 'UNITY',
  'Scars of Harpuia': 'UNITY',
  'Mailers Mailroom': 'UNITY',
  'Text Based Fighting Game': 'C',
  'Text Based Tic-Tac-Toe': 'C',
  'Text Based Bank Simulator': 'C',
  'Elden Rouge': 'C++',
  'Nomorod': 'C++',
  'Personal OpenGL Game Engine': 'C++ · OPENGL · CMAKE',
  'Kandili Sanctuary': 'UNITY'
};
document.querySelectorAll('.game-card').forEach(card => {
  const title = card.querySelector('h3')?.textContent.trim();
  if (techLabels[title]) card.querySelector('span').textContent = techLabels[title];
  if (categories[title]) card.querySelector('div p').textContent = categories[title];
});

document.querySelectorAll('.game-card').forEach(card => {
  const title = card.querySelector('h3').textContent.trim();
  const project = projects[title];
  if (!project) return;
  const tech = techLabels[title] || 'PROJECT';
  card.insertAdjacentHTML('beforeend', `<span class="image-hint">ADD A GAME SCREENSHOT</span><div class="card-peek"><span>BUILT WITH · ${tech}</span><p>${project.detail}</p><strong>${project.url ? 'Open project ↗' : 'Project overview'}</strong>${project.url ? '<span>Click to visit the game page</span>' : ''}</div>`);
  if (project.image) {
    card.classList.add('has-image');
    card.style.setProperty('--project-image', `url("${project.image}")`);
  }
  if (project.url) {
    card.classList.add('is-linked');
    card.tabIndex = 0;
    const open = () => window.open(project.url, '_blank', 'noopener');
    card.addEventListener('click', open);
    card.addEventListener('keydown', event => { if (event.key === 'Enter') open(); });
  }
});

document.querySelectorAll('.next-page').forEach(button => button.addEventListener('click', () => document.querySelector('[data-page="1"]')?.scrollIntoView({ behavior: 'smooth', block: 'start' })));
document.getElementById('prev').addEventListener('click', () => showPage(current - 1));
document.getElementById('next').addEventListener('click', () => showPage(current + 1));
tabs.filter(tab => !tab.closest('.header-nav')).forEach(tab => tab.addEventListener('click', () => showPage(Number(tab.dataset.go))));
const headerButtons = [...document.querySelectorAll('.header-nav [data-go]')];
headerButtons.forEach(button => button.addEventListener('click', () => {
  const target = document.querySelector(`[data-page="${button.dataset.go}"]`);
  target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}));
const sectionObserver = new IntersectionObserver(entries => {
  const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  const page = visible.target.dataset.page;
  headerButtons.forEach(button => button.classList.toggle('selected', button.dataset.go === page));
}, { threshold: .35 });
pages.forEach(page => sectionObserver.observe(page));
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); });
}, { threshold: .15 });
document.querySelectorAll('.author-layout,.page-heading,.project-grid,.in-progress-section,.past-divider,.stats-layout,.contact-layout,.badges').forEach(element => { element.classList.add('reveal'); revealObserver.observe(element); });
document.getElementById('year').textContent = new Date().getFullYear();
const contactForm = document.getElementById('contact-form');
contactForm.action = 'https://formsubmit.co/njinoferio@gmail.com';
contactForm.method = 'POST';
contactForm.querySelector('[name="name"]').placeholder = 'Naomi Sample';
contactForm.querySelector('[name="email"]').placeholder = 'naomisample@example.com';
contactForm.insertAdjacentHTML('afterbegin', '<input type="hidden" name="_subject" value="New portfolio message" /><input type="hidden" name="_captcha" value="false" />');
