// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Results of my research as a paleontologist",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-fieldworks",
          title: "fieldworks",
          description: "Fieldwork is the lifeblood of our research",
          section: "Navigation",
          handler: () => {
            window.location.href = "/fieldworks/";
          },
        },{id: "nav-research",
          title: "research",
          description: "My research related experiences",
          section: "Navigation",
          handler: () => {
            window.location.href = "/researchexperiences/";
          },
        },{id: "nav-activities",
          title: "activities",
          description: "A growing collection of my activities.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/activities/";
          },
        },{id: "nav-freetimes",
          title: "freetimes",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/freetimes/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "fieldworks-national-dinosaur-fossil-excavation-project",
          title: 'National Dinosaur Fossil Excavation Project',
          description: "Paleontology Field Worker",
          section: "Fieldworks",handler: () => {
              window.location.href = "/fieldworks/nationaldino/";
            },},{id: "fieldworks-national-structural-geology-training-program",
          title: 'National Structural Geology Training Program',
          description: "Participating Student",
          section: "Fieldworks",handler: () => {
              window.location.href = "/fieldworks/nationalresource/";
            },},{id: "fieldworks-national-sedimentary-geology-education-program",
          title: 'National Sedimentary Geology Education Program',
          description: "Participating Student",
          section: "Fieldworks",handler: () => {
              window.location.href = "/fieldworks/nationalresource2/";
            },},{id: "projects-psy",
          title: 'PSY',
          description: "Paleontological Society of Yonsei",
          section: "Projects",handler: () => {
              window.location.href = "/projects/PSY/";
            },},{id: "projects-ysgs",
          title: 'YSGS',
          description: "Yonsei Society of Geological Scrutiny",
          section: "Projects",handler: () => {
              window.location.href = "/projects/YSGS/";
            },},{id: "researchexperiences-ada-2025",
          title: 'ADA 2025',
          description: "Asian Dinosaur Association Symposium-Poster Presenter",
          section: "Researchexperiences",handler: () => {
              window.location.href = "/researchexperiences/ada/";
            },},{id: "researchexperiences-crystallography-lab",
          title: 'Crystallography Lab',
          description: "Undergraduate Researcher",
          section: "Researchexperiences",handler: () => {
              window.location.href = "/researchexperiences/crystallography/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%65%61%67%6C%65%74%77@%79%6F%6E%73%65%69.%61%63.%6B%72", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/_twyoon", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
