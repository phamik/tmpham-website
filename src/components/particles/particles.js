import React from 'react';
import Particles from 'react-particles-js';


const ParticlesBackground = ({ open }) => {
  return(
        <Particles 
          params={{
              particles: {
                  number: {
                    value: 150,
                    density: {
                      enable: true,
                      value_area: 900
                    }
                  },
                  color: {
                      value: '#fff'
                  },
                  shape: {
                      type: 'circle',
                      stroke: {
                          width: 0,
                          color: '#000000'
                      },
                      polygon: {
                          nb_sides: 7
                      },
                      // image: {
                      //     src: '',
                      //     // width: 100,
                      //     // height: 100
                      // },
                  },
                  opacity: {
                      value: 1,
                      random: true,
                      anim: {
                          enable: true,
                          speed: 1,
                          opacity_min: 0.1,
                          sync: false
                      }
                  },
                  size: {
                      value: 2,
                      random: true,
                      anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                      }
                  },
                  line_linked: {
                      enable: true,
                      distance: 150,
                      color: '#ffffff',
                      opacity: 0.4,
                      width: 1.5
                  },
                  move: {
                      enable: true,
                      speed: 6,
                      direction: 'none',
                      random: false,
                      straight: false,
                      out_mode: 'out',
                      bounce: false,
                      attract: {
                        enable: false,
                        rotateX: 3000,
                        rotateY: 3000
                      }
                  },
              },
              interactivity: {
                  detect_on: "canvas",
                  events: {
                    onhover: {
                      enable: true,
                      mode: "repulse"
                    },
                    onclick: {
                      enable: true,
                      mode: "push"
                    },
                    resize: true
                  },
                  modes: {
                    grab: {
                      distance: 300,
                      line_linked: {
                        opacity: 1
                      }
                    },
                    bubble: {
                      distance: 800,
                      size: 80,
                      duration: 2,
                      opacity: 0.8,
                      speed: 3
                    },
                    repulse: {
                      distance: 100,
                      duration: 0.4
                    },
                    push: {
                      particles_nb: 4
                    },
                    remove: {
                      particles_nb: 2
                    }
                  }
                },
                retina_detect: true
          }}  />
)
}

export default ParticlesBackground;