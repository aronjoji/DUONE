document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle logic for header (needed on member page too)
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  }

  // 1. Data Store for Members (Using Google Drive Video URLs)
  const membersData = {
    don1: {
      name: "Don1",
      title: "Creative Director & Founder",
      bio: "Don1 is the visionary founder and creative compass of DUONE. With over a decade of experience producing award-winning commercials and short films, he specializes in translating complex brand values into simple, emotionally resonant visual stories. He believes that a great ad is not just watched—it is felt. Don1 leads all creative production phases, ensuring the highest standards of cinematography and narrative integrity.",
      skills: ["Creative Direction", "Cinematography", "Storyboarding", "Screenwriting", "Art Direction", "Executive Production"],
      image: "assets/don1.png",
      portfolio: [
        {
          title: "Nike - Dream Crazy Commercial",
          category: "Commercial Video",
          videoUrl: "https://drive.google.com/file/d/17Vp5fKq-0dJ_ZaMEg04SW5l3I1S33Nlm/view?usp=drive_link"
        },
        {
          title: "Apple - Underdogs Cinematic Campaign",
          category: "Brand Film",
          videoUrl: "https://drive.google.com/file/d/17Vp5fKq-0dJ_ZaMEg04SW5l3I1S33Nlm/view?usp=drive_link"
        },
        {
          title: "Volvo - The Epic Split Ad",
          category: "Visual Masterpiece",
          videoUrl: "https://drive.google.com/file/d/17Vp5fKq-0dJ_ZaMEg04SW5l3I1S33Nlm/view?usp=drive_link"
        },
        {
          title: "GoPro - Fireman Saves Kitten",
          category: "Viral Campaign",
          videoUrl: "https://drive.google.com/file/d/17Vp5fKq-0dJ_ZaMEg04SW5l3I1S33Nlm/view?usp=drive_link"
        }
      ]
    },
    don2: {
      name: "Don2",
      title: "Lead Brand Strategist",
      bio: "Don2 is a master of psychology and market dynamics. He bridges the gap between creative visual work and business metrics. With a background in consumer behavior and brand positioning, he designs target-oriented strategies that ensure DUONE's ad campaigns reach the exact audience they need to convert. From high-level launch positioning to copywriting hooks, Don2 makes sure every creative element is built on solid data.",
      skills: ["Brand Positioning", "Market Analytics", "Target Audience Profiling", "Conversion Copywriting", "SEO & Digital Strategy", "ROI Optimization"],
      image: "assets/don2.png",
      portfolio: [
        {
          title: "Dollar Shave Club - Our Blades Are F***ing Great",
          category: "Launch Strategy",
          videoUrl: "https://drive.google.com/file/d/17Vp5fKq-0dJ_ZaMEg04SW5l3I1S33Nlm/view?usp=drive_link"
        },
        {
          title: "Coca-Cola - Share a Coke Campaign Case Study",
          category: "Global Strategy",
          videoUrl: "https://drive.google.com/file/d/17Vp5fKq-0dJ_ZaMEg04SW5l3I1S33Nlm/view?usp=drive_link"
        },
        {
          title: "Slack - Work Simplified Commercial",
          category: "B2B Positioning",
          videoUrl: "https://drive.google.com/file/d/17Vp5fKq-0dJ_ZaMEg04SW5l3I1S33Nlm/view?usp=drive_link"
        }
      ]
    },
    don3: {
      name: "Don3",
      title: "VFX & Post-Production Lead",
      bio: "Don3 is the wizard behind the scenes, bringing imagination to life through stunning visual effects, meticulous editing, and cinematic color grading. Possessing expert control over high-end editing tools, he treats every frame like a canvas. His ability to synchronize sound, color, and motion ensures that all commercials have that polished, Hollywood-grade premium feel before delivery.",
      skills: ["Color Grading", "DaVinci Resolve", "VFX Compositing", "3D Rendering & Animation", "Sound Design & Mix", "Adobe After Effects"],
      image: "assets/don3.png",
      portfolio: [
        {
          title: "Marvel Studios' VFX Breakdown - Studio Reel",
          category: "Visual Effects",
          videoUrl: "https://drive.google.com/file/d/17Vp5fKq-0dJ_ZaMEg04SW5l3I1S33Nlm/view?usp=drive_link"
        },
        {
          title: "Beats by Dre - Color Grading & Sound Design Showcase",
          category: "Sound & Motion",
          videoUrl: "https://drive.google.com/file/d/17Vp5fKq-0dJ_ZaMEg04SW5l3I1S33Nlm/view?usp=drive_link"
        },
        {
          title: "Audi - Cinematic Car Commercial VFX Walkthrough",
          category: "Automotive Film",
          videoUrl: "https://drive.google.com/file/d/17Vp5fKq-0dJ_ZaMEg04SW5l3I1S33Nlm/view?usp=drive_link"
        }
      ]
    }
  };

  // 2. Parse URL parameters
  const getQueryParam = (param) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  };

  // Get member ID or default to 'don1'
  let memberId = getQueryParam('id');
  if (!memberId || !membersData[memberId]) {
    memberId = 'don1';
  }

  const member = membersData[memberId];

  // 3. Helper: Extract Google Drive File ID and return Embed/Preview URL
  function getGoogleDriveEmbedUrl(url) {
    if (!url) return '';
    
    // If it's already a preview URL, return it
    if (url.includes('/preview')) {
      return url;
    }
    
    // Regular expression to match the Google Drive file ID
    const driveRegExp = /\/file\/d\/([a-zA-Z0-9_-]+)/;
    const match = url.match(driveRegExp);
    
    if (match && match[1]) {
      return `https://drive.google.com/file/d/${match[1]}/preview`;
    }
    
    return url;
  }

  // 4. Render Member Profile Details
  const container = document.getElementById('member-detail-container');
  if (container) {
    // Generate skills markup
    const skillsHtml = member.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('');

    container.innerHTML = `
      <div class="member-detail-sticky">
        <div class="member-detail-img-card">
          <img src="${member.image}" alt="${member.name}" class="member-detail-img">
          <div class="member-detail-meta">
            <h1 class="member-detail-name">${member.name}</h1>
            <p class="member-detail-title">${member.title}</p>
          </div>
        </div>
      </div>
      <div class="member-detail-content">
        <h2>About ${member.name}</h2>
        <p class="bio-text">${member.bio}</p>
        
        <div class="skills-wrapper">
          <h3 class="skills-title">Key Competencies</h3>
          <div class="skills-list">
            ${skillsHtml}
          </div>
        </div>
      </div>
    `;
  }

  // 5. Render Member Portfolio Videos
  const portfolioGrid = document.getElementById('portfolio-grid');
  const portfolioSection = document.getElementById('portfolio-section');
  const portfolioTitle = document.getElementById('portfolio-title');

  if (portfolioGrid && portfolioSection && member.portfolio.length > 0) {
    portfolioTitle.innerText = `${member.name}'s Featured Works`;
    portfolioGrid.innerHTML = ''; // Clear loading

    member.portfolio.forEach(item => {
      const url = item.videoUrl;
      let playerHtml = '';
      
      // Check if it's a direct video link (ends with .mp4, is hosted on raw github, or is a github release asset)
      const isDirectVideo = url.toLowerCase().endsWith('.mp4') || 
                            url.includes('raw.githubusercontent.com') || 
                            url.includes('/releases/download/');
      
      if (isDirectVideo) {
        playerHtml = `
          <video 
            controls 
            playsinline 
            preload="metadata"
            poster="${member.image}">
            <source src="${url}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        `;
      } else {
        const embedUrl = getGoogleDriveEmbedUrl(url);
        playerHtml = `
          <iframe 
            src="${embedUrl}" 
            title="${item.title}" 
            allow="autoplay; encrypted-media" 
            allowfullscreen>
          </iframe>
        `;
      }
      
      const cardHtml = `
        <div class="portfolio-card">
          <div class="video-player-container">
            ${playerHtml}
          </div>
          <div class="portfolio-card-info">
            <div class="portfolio-card-category">${item.category}</div>
            <h3 class="portfolio-card-title">${item.title}</h3>
          </div>
        </div>
      `;
      portfolioGrid.insertAdjacentHTML('beforeend', cardHtml);
    });

    // Make section visible
    portfolioSection.style.display = 'block';
  }
});
