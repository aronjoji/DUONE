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
      name: "Jyothish Kumar",
      title: "Creative Director / Script Writer",
      bio: "Jyothish Kumar is the visionary creative director and script writer at DUONE. With a sharp eye for cinematic storytelling and years of experience crafting compelling narratives, he transforms bold ideas into powerful visual stories. His expertise in scriptwriting and creative direction ensures every project carries emotional depth, visual impact, and a lasting impression on audiences.",
      skills: ["Creative Direction", "Scriptwriting", "Storyboarding", "Screenwriting", "Art Direction", "Narrative Design"],
      image: "assets/don1.png",
      portfolio: [
        {
          title: "Dhathri - TVC Shoot",
          category: "Commercial Video",
          videoUrl: "https://drive.google.com/file/d/1JcdqycmM4-pUrBTIGYiwgpglTwmLrRuy/view?usp=drive_link"
        },
        {
          title: "Dhathri Theme Dec 20",
          category: "Brand Film",
          videoUrl: "https://drive.google.com/file/d/1DVolIdnU9Vj6dcKcuBSIx1ZLGfrZxql3/view?usp=drive_link"
        },
        {
          title: "Priya",
          category: "Ad Film",
          videoUrl: "https://drive.google.com/file/d/13J1saGfkmjNKP6G8_Z8uPxkzHIjGvPAw/view?usp=drive_link"
        },
        {
          title: "Logic Ad",
          category: "Script & Direction",
          videoUrl: "https://drive.google.com/file/d/1F7KNJBigG-ToHN9fC2l_zxdu87LNyx--/view?usp=drive_link"
        },
        {
          title: "Incredible Valentines Day",
          category: "Creative Campaign",
          videoUrl: "https://drive.google.com/file/d/1AqswgjAypggTQLePtIz_yGp0n6T5TBB1/view?usp=drive_link"
        },
        {
          title: "Koko Jun 27 Theme Video",
          category: "Theme Video",
          videoUrl: "https://drive.google.com/file/d/12ndWLQT9ahByIcj_RQiQtu8v8s8wqsm_/view?usp=drive_link"
        },
        {
          title: "Koko May 4 Content Reel",
          category: "Content Reel",
          videoUrl: "https://drive.google.com/file/d/1jYFgE6wU6kWGpFoFzWRqzTAM4V3uIAxM/view?usp=drive_link"
        },
        {
          title: "Koko May 17 Promo Reel",
          category: "Promo Reel",
          videoUrl: "https://drive.google.com/file/d/1beHeuY_Bpxdwg8ZkKt2O4_Sczpla-YWI/view?usp=drive_link"
        },
        {
          title: "Dhathri Reel",
          category: "Brand Reel",
          videoUrl: "https://drive.google.com/file/d/1BQ4G4bG8ddScsj31TioIN_VF6I-7-wqc/view?usp=drive_link"
        },
        {
          title: "Dhathri Theme 1",
          category: "Theme Video",
          videoUrl: "https://drive.google.com/file/d/1Pvd10g-2xFwsYnB7U67w6ShYI4r3vVPo/view?usp=drive_link"
        }
      ]
    },
    don2: {
      name: "Don Xavier",
      title: "Video Editor",
      bio: "Don Xavier is the master video editor at DUONE, turning raw footage into polished, high-impact visual stories. With an exceptional eye for pacing, transitions, and color grading, he brings every project to life with cinematic precision. His editing expertise spans commercial ads, brand films, and promotional content, ensuring every frame delivers maximum impact.",
      skills: ["Video Editing", "Color Grading", "Motion Graphics", "Sound Design", "Post-Production", "Visual Effects"],
      image: "assets/don2.png",
      portfolio: [
        {
          title: "Francis Alukkas - Haritha",
          category: "Jewellery Ad",
          videoUrl: "https://drive.google.com/file/d/1ciVE64oyjzzEut1R_bgKng_-aTwoiKBb/view?usp=drive_link"
        },
        {
          title: "Haritha x Mama Earth",
          category: "Brand Collaboration",
          videoUrl: "https://drive.google.com/file/d/1M9O4RsCXlQKtsBtgEATTinh2mjEC5e0R/view?usp=drive_link"
        },
        {
          title: "Haritha - Tata",
          category: "Commercial Video",
          videoUrl: "https://drive.google.com/file/d/1z2AnAA4dAg5v8H5ROtIwBY2OZGoFMNJ2/view?usp=drive_link"
        },
        {
          title: "Joy Alukkas",
          category: "Jewellery Ad",
          videoUrl: "https://drive.google.com/file/d/14CuD7lqCAyKQTQrfPqTewuG-hgUKhrZR/view?usp=drive_link"
        },
        {
          title: "KLF Wrapped",
          category: "Brand Film",
          videoUrl: "https://drive.google.com/file/d/17BnwIJ8DOuCdjWlSgWC42xP4sJOGxrPd/view?usp=drive_link"
        },
        {
          title: "Hilite",
          category: "Promotional Video",
          videoUrl: "https://drive.google.com/file/d/1eP7-OOJd0QItDLciisg2zvnN7KCi1tQS/view?usp=drive_link"
        },
        {
          title: "Yaami Costume",
          category: "Fashion Ad",
          videoUrl: "https://drive.google.com/file/d/1lvTl6hoXq6Z-k2mHw6BhGbMIUVnzLjM3/view?usp=drive_link"
        },
        {
          title: "Brahmins",
          category: "Product Ad",
          videoUrl: "https://drive.google.com/file/d/1GPiDSEA0zbUQfgf-jxqu4BSCCeLUxllC/view?usp=drive_link"
        },
        {
          title: "Haritha x Forum",
          category: "Brand Collaboration",
          videoUrl: "https://drive.google.com/file/d/1m8kirfwIG8Px5km50BOBqm8S6lyjvgtJ/view?usp=drive_link"
        },
        {
          title: "Haritha x Akantha",
          category: "Brand Collaboration",
          videoUrl: "https://drive.google.com/file/d/1rrwllpg47zXgW_Lr7iufYextBKKQDeWz/view?usp=drive_link"
        },
        {
          title: "Sunny Leone DJ",
          category: "Event Promo",
          videoUrl: "https://drive.google.com/file/d/1sLdOX_aFcylxmd3dePLUuTkYqroJC0w7/view?usp=drive_link"
        },
        {
          title: "Ihadone",
          category: "Ad Film",
          videoUrl: "https://drive.google.com/file/d/1_kv-sXC9h2_-rDwG8WRGA-4L-rCu8HWO/view?usp=drive_link"
        },
        {
          title: "Yellow Wave Podcast Rewind",
          category: "Podcast Video",
          videoUrl: "https://drive.google.com/file/d/1kd9eQhkDyoxcPh7GROn2nHoHVL_Bxd2b/view?usp=drive_link"
        },
        {
          title: "IM Vijayan Podcast Promo",
          category: "Podcast Promo",
          videoUrl: "https://drive.google.com/file/d/1zyT9_9GDkiTUGBNY5hyIOqTY6V8nLj6J/view?usp=drive_link"
        },
        {
          title: "Podcast Shorts - Luna",
          category: "Podcast Shorts",
          videoUrl: "https://drive.google.com/file/d/1gIrTyAbh1dtcl0Ti5NJstLsMwLnsz9Ga/view?usp=drive_link"
        }
      ]
    },
    don3: {
      name: "Midhun Venu",
      title: "Video Editor",
      bio: "Midhun Venu is a highly skilled video editor at DUONE. Known for his creative cuts, rhythmic editing, and advanced post-production techniques, he specializes in delivering fast-paced and visually engaging content. From commercial campaigns to dynamic podcast visuals, his editing ensures that every project captures attention instantly and holds it until the very end.",
      skills: ["Video Editing", "Creative Cuts", "Pacing & Rhythm", "Post-Production", "Color Correction", "Visual Storytelling"],
      image: "assets/don3.png",
      portfolio: [
        {
          title: "Dhathri Shampoo",
          category: "Commercial Video",
          videoUrl: "https://drive.google.com/file/d/1slX4AnSwFtwRj1vi1-D1PtQOZgBoWsN6/view?usp=drive_link"
        },
        {
          title: "Find My Hostel 3",
          category: "Ad Film",
          videoUrl: "https://drive.google.com/file/d/1PMhzBHZE-tJU9lzTh5Wap74yQfRt3fKT/view?usp=drive_link"
        },
        {
          title: "Find My Hostel",
          category: "Ad Film",
          videoUrl: "https://drive.google.com/file/d/1S6b3YoCnnBUwPkfuvPOFr1PJJDUnC4-z/view?usp=drive_link"
        },
        {
          title: "Dhathri Theme",
          category: "Brand Film",
          videoUrl: "https://drive.google.com/file/d/1QJ2zrF_7sb20KotAgLsCxkWmNCDUMqP-/view?usp=drive_link"
        },
        {
          title: "Ledger X",
          category: "Promotional Video",
          videoUrl: "https://drive.google.com/file/d/1_L6819_R4IIKXUnUtx2F_2NvSdhhydML/view?usp=drive_link"
        },
        {
          title: "Ledger X 2",
          category: "Promotional Video",
          videoUrl: "https://drive.google.com/file/d/1QPJEqQJp3FM4lHiWcJhS2j4Vhz1wKiYA/view?usp=drive_link"
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

  // Helper: Get Google Drive video thumbnail URL from a Drive link
  function getGoogleDriveThumbnail(url) {
    if (!url) return '';
    const driveRegExp = /\/file\/d\/([a-zA-Z0-9_-]+)/;
    const match = url.match(driveRegExp);
    if (match && match[1]) {
      return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w1280`;
    }
    return '';
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

  // 5. Render Member Portfolio Videos (Using Thumbnail + Lightbox Model)
  const portfolioGrid = document.getElementById('portfolio-grid');
  const portfolioSection = document.getElementById('portfolio-section');
  const portfolioTitle = document.getElementById('portfolio-title');

  if (portfolioGrid && portfolioSection && member.portfolio.length > 0) {
    portfolioTitle.innerText = `${member.name}'s Featured Works`;
    portfolioGrid.innerHTML = ''; // Clear loading

    member.portfolio.forEach(item => {
      const thumbnail = getGoogleDriveThumbnail(item.videoUrl) || member.image;
      const cardHtml = `
        <div class="portfolio-card clickable-video-card" data-video-url="${item.videoUrl}" data-video-title="${item.title}">
          <div class="video-thumbnail-container">
            <img src="${thumbnail}" alt="${item.title}" class="portfolio-thumbnail" onerror="this.src='${member.image}'">
            <div class="play-overlay">
              <div class="play-button-pulsing">
                <i class="fa-solid fa-play"></i>
              </div>
            </div>
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

    // 6. Lightbox Event Handlers
    const lightbox = document.getElementById('video-lightbox');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxContent = document.querySelector('.lightbox-content');
    
    if (lightbox && lightboxClose && lightboxContent) {
      portfolioGrid.addEventListener('click', (e) => {
        const card = e.target.closest('.clickable-video-card');
        if (!card) return;
        
        const videoUrl = card.getAttribute('data-video-url');
        const videoTitle = card.getAttribute('data-video-title');
        if (!videoUrl) return;
        
        const isDirectVideo = videoUrl.toLowerCase().endsWith('.mp4') || 
                              videoUrl.includes('raw.githubusercontent.com') || 
                              videoUrl.includes('/releases/download/');
        
        let playerHtml = '';
        if (isDirectVideo) {
          playerHtml = `
            <div class="lightbox-video-wrapper">
              <video controls autoplay playsinline style="width: 100%; height: 100%; object-fit: contain;">
                <source src="${videoUrl}" type="video/mp4">
                Your browser does not support the video tag.
              </video>
            </div>
          `;
        } else {
          const embedUrl = getGoogleDriveEmbedUrl(videoUrl);
          playerHtml = `
            <div class="lightbox-video-wrapper">
              <iframe 
                src="${embedUrl}" 
                title="${videoTitle || 'Portfolio Work'}" 
                allow="autoplay; encrypted-media" 
                allowfullscreen>
              </iframe>
            </div>
          `;
        }
        
        // Inject player code
        lightboxContent.innerHTML = playerHtml;
        
        // Show lightbox
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
      
      const closeLightbox = () => {
        lightbox.classList.remove('active');
        lightboxContent.innerHTML = ''; // Stops audio/video instantly
        document.body.style.overflow = ''; // Restore scroll
      };
      
      lightboxClose.addEventListener('click', closeLightbox);
      
      // Close on clicking backdrop
      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
          closeLightbox();
        }
      });
      
      // Close on ESC
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
          closeLightbox();
        }
      });
    }
  }
});
