 const electionsData = {
    positions: [
        {
            title: "Nominations for SAC President",
            candidates: [
                {
                    name: "Candidate 1",
                    batch: "Batch of 2024",
                    agenda: "1. Improve student facilities\n2. Enhance campus safety\n3. Increase student participation in decision making",
                    image: "images/removed_bg.png",
                    email: "candidate1@example.com",
                    whatsapp: "+1234567890",
                    instagram: "https://instagram.com/candidate1"
                },
                {
                    name: "Candidate 2",
                    batch: "Batch of 2025",
                    agenda: "1. Better food options in cafeteria\n2. More study spaces\n3. Improved Wi-Fi connectivity",
                    image: "images/removed_bg.png",
                    email: "candidate2@example.com",
                    whatsapp: "+1234567891",
                    instagram: "https://instagram.com/candidate2"
                },
                {
                    name: "Candidate 3",
                    batch: "Batch of 2023",
                    agenda: "1. More extracurricular activities\n2. Better career guidance\n3. Sustainable campus initiatives",
                    image: "images/removed_bg.png",
                    email: "candidate3@example.com",
                    whatsapp: "+1234567892",
                    instagram: "https://instagram.com/candidate3"
                }
            ]
        },
        {
            title: "Nominations for SAC Vice-President",
            candidates: [
                {
                    name: "Candidate A",
                    batch: "Batch of 2024",
                    agenda: "1. Support for student clubs\n2. Mental health initiatives\n3. Academic support programs",
                    image: "images/removed_bg.png",
                    email: "candidateA@example.com",
                    whatsapp: "+1234567893",
                    instagram: "https://instagram.com/candidateA"
                },
                {
                    name: "Candidate B",
                    batch: "Batch of 2025",
                    agenda: "1. Better event planning\n2. More student feedback channels\n3. Improved library resources",
                    image: "images/removed_bg.png",
                    email: "candidateB@example.com",
                    whatsapp: "+1234567894",
                    instagram: "https://instagram.com/candidateB"
                }
            ]
        },
        {
            title: "Nominations for Cultural Secretary",
            candidates: [
                {
                    name: "Candidate X",
                    batch: "Batch of 2023",
                    agenda: "1. More cultural events\n2. Inter-college competitions\n3. Support for art students",
                    image: "images/removed_bg.png",
                    email: "candidateX@example.com",
                    whatsapp: "+1234567895",
                    instagram: "https://instagram.com/candidateX"
                },
                {
                    name: "Candidate Y",
                    batch: "Batch of 2024",
                    agenda: "1. Diverse cultural programs\n2. Talent showcase events\n3. Cultural exchange programs",
                    image: "images/removed_bg.png",
                    email: "candidateY@example.com",
                    whatsapp: "+1234567896",
                    instagram: "https://instagram.com/candidateY"
                },
                {
                    name: "Candidate Z",
                    batch: "Batch of 2025",
                    agenda: "1. Traditional festival celebrations\n2. Art exhibitions\n3. Music and dance workshops",
                    image: "images/removed_bg.png",
                    email: "candidateZ@example.com",
                    whatsapp: "+1234567897",
                    instagram: "https://instagram.com/candidateZ"
                }
            ]
        }
        // Add more positions as needed
    ]
};

// Function to render elections data
function renderElectionsData() {
    const container = document.getElementById('elections-container');
    
    electionsData.positions.forEach(position => {
        // Create position section
        const positionSection = document.createElement('div');
        positionSection.className = 'mb-12';
        
        // Position title
        const title = document.createElement('h3');
        title.className = 'font-pangolin italic text-2xl font-bold mb-2';
        title.style.fontFamily = "'Pangolin', cursive";
        title.textContent = position.title;
        
        // Divider
        const divider = document.createElement('hr');
        divider.className = 'w-1/6 h-0.5 bg-black mb-6';
        
        // Candidates container
        const candidatesContainer = document.createElement('div');
        candidatesContainer.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';
        
        // Add candidates
        position.candidates.forEach(candidate => {
            const candidateCard = document.createElement('div');
            candidateCard.className = 'bg-white rounded-lg shadow-md overflow-hidden p-6 flex flex-col items-center';
            
            // Candidate image
            const img = document.createElement('img');
            img.src = candidate.image;
            img.alt = 'Profile picture';
            img.className = 'w-32 h-32 rounded-full object-cover mb-4';
            
            // Candidate name
            const name = document.createElement('h3');
            name.className = 'text-xl font-bold mb-1';
            name.textContent = candidate.name;
            
            // Candidate batch
            const batch = document.createElement('h4');
            batch.className = 'text-gray-600 mb-3';
            batch.textContent = candidate.batch;
            
            // Agenda section
            const agendaTitle = document.createElement('h3');
            agendaTitle.className = 'font-bold mb-1';
            agendaTitle.textContent = 'Agenda';
            
            // Agenda preview (shortened)
            const agendaPreview = document.createElement('h4');
            agendaPreview.className = 'text-gray-600 mb-4 line-clamp-2';
            agendaPreview.textContent = candidate.agenda.split('\n')[0]; // Show first point only
            
            // View Agenda button
            const viewAgendaBtn = document.createElement('button');
            viewAgendaBtn.className = 'bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mb-4 transition-colors';
            viewAgendaBtn.textContent = 'View Agenda';
            viewAgendaBtn.onclick = () => showAgendaModal(candidate.name, candidate.agenda);
            
            // Social links
            const socialLinks = document.createElement('div');
            socialLinks.className = 'flex space-x-4';
            
            // Email
            const emailLink = document.createElement('a');
            emailLink.href = `mailto:${candidate.email}`;
            emailLink.className = 'text-gray-600 hover:text-blue-500';
            emailLink.innerHTML = '<i class="fas fa-envelope"></i>';
            
            // WhatsApp
            const whatsappLink = document.createElement('a');
            whatsappLink.href = `https://wa.me/${candidate.whatsapp}`;
            whatsappLink.className = 'text-gray-600 hover:text-green-500';
            whatsappLink.innerHTML = '<i class="fab fa-whatsapp"></i>';
            
            // Instagram
            const instagramLink = document.createElement('a');
            instagramLink.href = candidate.instagram;
            instagramLink.className = 'text-gray-600 hover:text-pink-500';
            instagramLink.innerHTML = '<i class="fab fa-instagram"></i>';
            
            // Append social links
            socialLinks.appendChild(emailLink);
            socialLinks.appendChild(whatsappLink);
            socialLinks.appendChild(instagramLink);
            
            // Append all elements to candidate card
            candidateCard.appendChild(img);
            candidateCard.appendChild(name);
            candidateCard.appendChild(batch);
            candidateCard.appendChild(agendaTitle);
            candidateCard.appendChild(agendaPreview);
            candidateCard.appendChild(viewAgendaBtn);
            candidateCard.appendChild(socialLinks);
            
            // Add candidate card to container
            candidatesContainer.appendChild(candidateCard);
        });
        
        // Append all to position section
        positionSection.appendChild(title);
        positionSection.appendChild(divider);
        positionSection.appendChild(candidatesContainer);
        
        // Add position section to main container
        container.appendChild(positionSection);
    });
}

// Function to show agenda modal
function showAgendaModal(name, agenda) {
    const modal = document.getElementById('agendaModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalAgenda = document.getElementById('modalAgenda');
    
    modalTitle.textContent = `${name}'s Agenda`;
    
    // Convert newlines to <br> tags and create list items for each point
    const agendaPoints = agenda.split('\n').filter(point => point.trim() !== '');
    let agendaHTML = '<ul class="list-disc pl-5 space-y-2">';
    agendaPoints.forEach(point => {
        agendaHTML += `<li>${point}</li>`;
    });
    agendaHTML += '</ul>';
    
    modalAgenda.innerHTML = agendaHTML;
    
    modal.style.display = 'block';
}

// Function to close modal
function closeModal() {
    const modal = document.getElementById('agendaModal');
    modal.style.display = 'none';
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    renderElectionsData();
    
    // Close modal when clicking X or outside
    document.getElementById('closeModal').addEventListener('click', closeModal);
    window.addEventListener('click', (event) => {
        const modal = document.getElementById('agendaModal');
        if (event.target === modal) {
            closeModal();
        }
    });
});



/////header of eleection
ScrollReveal({
    reset: false,
    distance: '60px',
    duration: 2000,
  });

  ScrollReveal().reveal('.contain_header', {delay: 200, origin: 'left'});
  ScrollReveal().reveal('#ii', {delay: 200, origin: 'right'});
  ScrollReveal().reveal('.rc', {delay: 200});
  ScrollReveal().reveal('h3', {delay: 200, origin: 'left'});
  ScrollReveal().reveal('.profile-box', {delay: 200});

  const menu = document.querySelector(".list");
  const menuBtn = document.querySelector(".menu-btn");
  const cancelBtn = document.querySelector(".cancel-btn");

  menuBtn.onclick = () => {
    menu.classList.add("active");
    menuBtn.classList.add("hide");
    document.querySelector(".blurred").classList.add("blur");
    document.querySelector("body").classList.add("active");
    document.querySelector(".navbar").style.zIndex = 99999;
  };

  cancelBtn.onclick = () => {
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
    document.querySelector(".blurred").classList.remove("blur");
    document.querySelector("body").classList.remove("active");
    document.querySelector(".navbar").style.zIndex = 999;
  };
  document.querySelector(".blurred").onclick = () => {
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
    document.querySelector(".blurred").classList.remove("blur");
    document.querySelector("body").classList.remove("active");
    document.querySelector(".navbar").style.zIndex = 999;
  };

  const primaryHeader = document.querySelector(".navbar");
  const scrollWatcher = document.createElement("div");

  scrollWatcher.setAttribute("data-scroll-watcher", "");
  primaryHeader.before(scrollWatcher);

  const navObserver = new IntersectionObserver(
    (entries) => {
      primaryHeader.classList.toggle(
        "sticking",
        !entries[0].isIntersecting
      );
    },
    { rootMargin: "200px 0px 0px 0px" }
  );

  navObserver.observe(scrollWatcher);