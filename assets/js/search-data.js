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
