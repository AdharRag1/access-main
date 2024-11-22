let isScreenReaderActive = false;
function toggleMenu() {
    var menu = document.getElementById("aswMenu");
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}
function adjustFontSize(multiply = 0) {
const storedPercentage = parseFloat(localStorage.getItem('fontPercentage'));
if(multiply)
{
    if (storedPercentage) {
    const newPercentage = storedPercentage + multiply;
    localStorage.setItem('fontPercentage', newPercentage);
    } else {
        const newPercentage = 1 + multiply;
        localStorage.setItem('fontPercentage', newPercentage);
    }
}
document
    .querySelectorAll("*")
    .forEach((el) => {
        if (!el.classList.contains('material-icons')) {
            let orgFontSize = parseFloat(el.getAttribute('data-asw-orgFontSize'));

            if (!orgFontSize) {
                orgFontSize = parseFloat(window.getComputedStyle(el).getPropertyValue('font-size'));
                el.setAttribute('data-asw-orgFontSize', orgFontSize);
            }
            let adjustedFontSize = orgFontSize * (parseFloat(localStorage.getItem('fontPercentage')) || 1);
            el.style['font-size'] = adjustedFontSize + 'px';
        }
    });
}


    function adjustLetterSpacing(increment = 0) {
        let isLetterSpacingEnabled = parseInt(localStorage.getItem('isLetterSpacingEnabled'));
        if(!increment)
        {
            isLetterSpacingEnabled = !isLetterSpacingEnabled;
            increment = 0.1;
        }
        if (!isLetterSpacingEnabled) {
            document
                .querySelectorAll("*")
                .forEach((el) => {
                    if (!el.classList.contains('material-icons')) {

                        let orgLetterSpacing = el.getAttribute('data-asw-orgLetterSpacing');

                        if (!orgLetterSpacing) {
                            orgLetterSpacing = el.style['letter-spacing'];
                            el.setAttribute('data-asw-orgLetterSpacing', orgLetterSpacing);
                            if (!(orgLetterSpacing)) {
                                orgLetterSpacing = 0;
                            }
                            orgLetterSpacing = parseFloat(orgLetterSpacing);
                            let newLetterSpacing = orgLetterSpacing + increment;
                            el.style['letter-spacing'] = newLetterSpacing + 'em';
                        }
                    }
                });

            localStorage.setItem('isLetterSpacingEnabled', 1);
        } else {
            document
                .querySelectorAll("*")
                .forEach((el) => {
                    if (!el.classList.contains('material-icons')) {
                        let orgLetterSpacing = el.getAttribute('data-asw-orgLetterSpacing');
                        if (orgLetterSpacing) {
                            el.style['letter-spacing'] = orgLetterSpacing;
                            el.removeAttribute('data-asw-orgLetterSpacing');
                        }
                        else
                        {
                            el.style.removeProperty('letter-spacing');
                        }
                    }
                });

                localStorage.setItem('isLetterSpacingEnabled', 0);
        }
    }

    function enableDyslexicFont(load = false) {
        let isDyslexicFontEnabled = parseInt(localStorage.getItem('isDyslexicFontEnabled'));
        if(load)
        {
            isDyslexicFontEnabled = !isDyslexicFontEnabled;
        }
        if (!isDyslexicFontEnabled) {
            document
                .querySelectorAll("*")
                .forEach((el) => {
                    if (!el.classList.contains('material-icons')) {
                        orgFontFamily = el.style['font-family'];
                        el.setAttribute('data-asw-orgFontFamily', orgFontFamily);
                        el.style['font-family'] = 'OpenDyslexic3';
                    }
                });

            localStorage.setItem('isDyslexicFontEnabled', 1);
        } else {
            document
                .querySelectorAll("*")
                .forEach((el) => {
                    if (!el.classList.contains('material-icons')) {
                        orgFontFamily = el.getAttribute('data-asw-orgFontFamily');
                        if (orgFontFamily) {
                            el.style['font-family'] = orgFontFamily;
                            el.removeAttribute('data-asw-orgFontFamily');
                        }
                        else
                        {
                            el.style.removeProperty('font-family');
                        }
                    }
                });

            localStorage.setItem('isDyslexicFontEnabled', 0);
        }
    }


    function enableBigCursor(load = false) {
        let isBigCursorEnabled = parseInt(localStorage.getItem('isBigCursorEnabled'));
        if(load)
        {
            isBigCursorEnabled = !isBigCursorEnabled;
        }
        if (!isBigCursorEnabled) {
            document
                .querySelectorAll("*")
                .forEach((el) => {
                    el.style.cursor = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 512 512'%3E%3Cpath d='M429.742 319.31L82.49 0l-.231 471.744 105.375-100.826 61.89 141.083 96.559-42.358-61.89-141.083 145.549-9.25zM306.563 454.222l-41.62 18.259-67.066-152.879-85.589 81.894.164-333.193 245.264 225.529-118.219 7.512 67.066 152.878z' xmlns='http://www.w3.org/2000/svg'/%3E%3C/svg%3E"), default`;;
                });
            localStorage.setItem('isBigCursorEnabled', 1);
        } else {
            document
                .querySelectorAll("*")
                .forEach((el) => {
                    el.style.cursor = 'default';
                });

            localStorage.setItem('isBigCursorEnabled', 0);
        }
    }


    function enableHighlightLinks(load = false) {
        let isHighlightLinks = parseInt(localStorage.getItem('isHighlightLinks'));
        if(load)
        {
            isHighlightLinks = !isHighlightLinks;
        }
        if (!isHighlightLinks) {
            document.querySelectorAll('a,button').forEach((anchor) => {
                const orgTextDecoration = window.getComputedStyle(anchor).getPropertyValue('text-decoration');
                const orgFontWeight = window.getComputedStyle(anchor).getPropertyValue('font-weight');
                const orgFontSize = window.getComputedStyle(anchor).getPropertyValue('font-size');
                const orgLinkColor = window.getComputedStyle(anchor).getPropertyValue('color');
                anchor.setAttribute('data-asw-orgLinkTextDecoration', orgTextDecoration);
                anchor.setAttribute('data-asw-orgLinkFontWeight', orgFontWeight);
                anchor.setAttribute('data-asw-orgLinkFontSize', orgFontSize);
                anchor.setAttribute('data-asw-orgLinkColor', orgLinkColor);
                anchor.style.textDecoration = 'underline';
                anchor.style.fontWeight = '800';
                anchor.style['font-size'] = parseInt(orgFontSize) * 1.1 + 'px';
                anchor.style['color'] = '#ff0000';
            });

            localStorage.setItem('isHighlightLinks', 1);
        } else {
            document.querySelectorAll('a,button').forEach((anchor) => {
                const orgTextDecoration = anchor.getAttribute('data-asw-orgLinkTextDecoration');
                const orgFontWeight = anchor.getAttribute('data-asw-orgLinkFontWeight');
                const orgFontSize = anchor.getAttribute('data-asw-orgLinkFontSize');
                const orgLinkColor = anchor.getAttribute('data-asw-orgLinkColor');
                anchor.style.color = orgLinkColor;
                anchor.style.fontSize = orgFontSize;
                anchor.style.textDecoration = orgTextDecoration;
                anchor.style.fontWeight = orgFontWeight;
            });

            localStorage.setItem('isHighlightLinks', 0);
        }
    }


function enableHighlightHeadings(load = false) {
    let isHighlightHeadings = parseInt(localStorage.getItem('isHighlightHeadings'));
    if(load)
    {
        isHighlightHeadings = !isHighlightHeadings;
    }
    if (!isHighlightHeadings) {
        document.querySelectorAll('h1, h2, h3,heading1').forEach((heading) => {
            const orgTextDecoration = window.getComputedStyle(heading).getPropertyValue('text-decoration');
            const orgHighlightColor = window.getComputedStyle(heading).getPropertyValue('color');
            heading.setAttribute('data-asw-orgHighlightTextDecoration', orgTextDecoration)
            heading.setAttribute('data-asw-orgHighlightColor', orgHighlightColor);
            heading.style.color = '#1ae5ef';
            heading.style.textDecoration = 'underline';
        });

        localStorage.setItem('isHighlightHeadings', 1);
    } else {
        document.querySelectorAll('h1, h2, h3,heading1').forEach((heading) => {
            const orgTextDecoration = heading.getAttribute('data-asw-orgHighlightTextDecoration');
            const orgHighlightColor = heading.getAttribute('data-asw-orgHighlightColor');
            heading.style.textDecoration = orgTextDecoration;
            heading.style.color = orgHighlightColor;
        });

        localStorage.setItem('isHighlightHeadings', 0);
    }
}


function adjustLineHeight(increment = 0) {
    let isLineHeightEnabled = parseInt(localStorage.getItem('isLineHeightEnabled'));
    if(!increment)
    {
        isLineHeightEnabled = !isLineHeightEnabled;
        increment = 1;
    }
    if (!isLineHeightEnabled) {
        document
            .querySelectorAll("*")
            .forEach((el) => {
                if (!el.classList.contains('material-icons')) {
                    let orgLineHeight = el.getAttribute('data-asw-orgLineHeight');

                    if (!orgLineHeight) {
                        orgLineHeight = el.style['line-height'];
                        el.setAttribute('data-asw-orgLineHeight', orgLineHeight);
                        if (!orgLineHeight) {
                            orgLineHeight = 1.1;
                        }
                        orgLineHeight = parseFloat(orgLineHeight);
                        let newLineHeight = orgLineHeight + increment;
                        el.style['line-height'] = newLineHeight;
                    }
                }
            });

        localStorage.setItem('isLineHeightEnabled', 1);
    } else {
        document
            .querySelectorAll("*")
            .forEach((el) => {
                if (!el.classList.contains('material-icons')) {
                    let orgLineHeight = el.getAttribute('data-asw-orgLineHeight');
                    if (orgLineHeight) {
                        el.style['line-height'] = orgLineHeight;
                        el.removeAttribute('data-asw-orgLineHeight');
                    }
                    else{
                        el.style.removeProperty('line-height');
                    }

                }
            });

        localStorage.setItem('isLineHeightEnabled', 0);
    }
}

function adjustFontWeight(increment = 100) {
    let isFontWeightEnabled = parseInt(localStorage.getItem('isFontWeightEnabled'));
    if (increment === 100) {
        isFontWeightEnabled = !isFontWeightEnabled;
        increment = 400;
    }
    if (!isFontWeightEnabled) {
        document
        .querySelectorAll("*")
        .forEach((el) => {
            if (!el.classList.contains('material-icons')) {
            let orgBoldFontWeight = window.getComputedStyle(el).getPropertyValue('--org-bold-font-weight');
            if (!orgBoldFontWeight) {
                orgBoldFontWeight = window.getComputedStyle(el).getPropertyValue('font-weight');
                el.style.setProperty('--org-bold-font-weight', orgBoldFontWeight);
            }
            let newFontWeight = parseInt(orgBoldFontWeight) + increment;
            el.style.setProperty('font-weight', newFontWeight);
            }
        });
        localStorage.setItem('isFontWeightEnabled', 1);
    } else {
        document
        .querySelectorAll("*")
        .forEach((el) => {
            if (!el.classList.contains('material-icons')) {
            let orgBoldFontWeight = window.getComputedStyle(el).getPropertyValue('--org-bold-font-weight');
            if (orgBoldFontWeight) {
                el.style['font-weight']= orgBoldFontWeight;
            } else {
                el.style.removeProperty('font-weight');
            }
            el.style.removeProperty('--org-bold-font-weight');
            }
        });
        localStorage.setItem('isFontWeightEnabled', 0);
    }
    }

function adjustContrast(load = false) {
    let isContrastEnabled = parseInt(localStorage.getItem('isContrastEnabled'));
    if(load)
    {
        isContrastEnabled = !isContrastEnabled;
    }
    if (!isContrastEnabled) {
        document
        .querySelectorAll("*")
        .forEach((el) => {
            let orgColor = el.getAttribute('data-asw-orgContrastColor');
            let orgBgColor = el.getAttribute('data-asw-orgContrastBgColor');

            if (!orgColor) {
                orgColor = el.style.color;
                el.setAttribute('data-asw-orgContrastColor', orgColor);
            }
            if(!orgBgColor) {
                orgBgColor = window.getComputedStyle(el).getPropertyValue('background-color');
                el.setAttribute('data-asw-orgContrastBgColor', orgBgColor);
            }

            el.style["color"] = '#ffff00';
            el.style["background-color"] = '#0000ff';
        });

        localStorage.setItem('isContrastEnabled', 1);
        } else {
            document
            .querySelectorAll("*")
            .forEach((el) => {
                let orgContrastColor = el.getAttribute('data-asw-orgContrastColor');
                let orgContrastBgColor = el.getAttribute('data-asw-orgContrastBgColor');
                if (orgContrastColor) {
                el.style.color = orgContrastColor;
                } else {
                el.style.removeProperty('color');
                }
                if (orgContrastBgColor) {
                el.style.backgroundColor = orgContrastBgColor;
                } else {
                el.style.removeProperty('background-color');
                }
                el.removeAttribute('data-asw-orgContrastColor');
                el.removeAttribute('data-asw-orgContrastBgColor');
            });
        localStorage.setItem('isContrastEnabled', 0);
    }
    }
    function onPageLoad() {
        adjustFontSize();
        adjustLetterSpacing();
        enableDyslexicFont(true);
        enableBigCursor(true);
        enableHighlightLinks(true);
        enableHighlightHeadings(true);
        adjustLineHeight();
        adjustFontWeight();
        adjustContrast(true);
    }
    onPageLoad();
    function reset(){
        localStorage.clear();
        onPageLoad();
    }
/**21 october 2024 */
/**21 october 2024 */
/**21 october 2024 */
/**21 october 2024 */
/**21 october 2024 */

let areImagesHidden = false;
let isMuted = false;
let isReading = false;
function toggleScreenReader() {
if (isScreenReaderActive) {
 stopScreenReader();

} else {
 startScreenReader();
 
}
isScreenReaderActive = !isScreenReaderActive;
}

    
function startScreenReader() {
const elementsToRead = document.querySelectorAll('h1, h2, h3, p, a');
elementsToRead.forEach(element => {
 const utterance = new SpeechSynthesisUtterance(element.innerText);
 utterance.rate = 1.5; 
 utterance.pitch = 1;
 speechSynthesis.speak(utterance);
});
}

function stopScreenReader() {
speechSynthesis.cancel();
}
function alignText(alignment) {
    document.querySelector('body').style.textAlign = alignment;
    }

function scaleContent(step) {
        const content = document.querySelector('body');
        let currentSize = parseFloat(window.getComputedStyle(content, null).getPropertyValue('font-size'));
        content.style.fontSize = (currentSize + step) + 'px';
    }
    function changeBackgroundColor(color) {
        document.body.style.backgroundColor = color;
    }
   
function changeTitleColor(color) {
        const title = document.querySelector('h1');
        title.style.color = color;
    }
function changeTextColor(color) {
        document.body.style.color = color;
    }
    function toggleLowSaturation() {
        const body = document.body;
        body.classList.toggle('low-saturation');
        console.log("Toggled low saturation:", body.classList.contains('low-saturation'));/**JUST FOR DEBUGGING*/
        
    }
    function toggleHighSaturation() {
        const body = document.body;
        // Toggle the 'high-saturation' class on the body
        body.classList.toggle('high-saturation');
    }
            function toggleMonochrome() {
                const container = document.querySelector("body");
                const isMonochrome = container.style.filter === 'grayscale(100%)';
                container.style.filter = isMonochrome ? 'none' : 'grayscale(100%)';
            }
            let readingRuler;


function createReadingRuler() {
 readingRuler = document.createElement('div');
 readingRuler.className = 'reading-ruler';
 document.body.appendChild(readingRuler);
}

function removeReadingRuler() {
 if (readingRuler) {
     document.body.removeChild(readingRuler);
     readingRuler = null;
 }
}

function updateRulerPosition(event) {
 if (readingRuler) {
     const x = event.clientX;
     const y = event.clientY;
     readingRuler.style.left = `${x}px`;
     readingRuler.style.top = `${y + window.scrollY}px`; 
 }
}

function toggleReadingRuler() {
 if (readingRuler) {
     removeReadingRuler();
     document.removeEventListener('mousemove', updateRulerPosition);
 } else {
     createReadingRuler();
     document.addEventListener('mousemove', updateRulerPosition);
 }
}

function toggleMute() {
    const mediaElements = document.querySelectorAll('audio, video');
    if (isMuted) {
        mediaElements.forEach(media => media.muted = false);
    } else {
        mediaElements.forEach(media => media.muted = true);
    }
    isMuted = !isMuted;
   }
   
   function toggleImages() {
    const images = document.querySelectorAll('img');
    if (areImagesHidden) {
        images.forEach(img => img.style.display = 'block');
    } else {
        images.forEach(img => img.style.display = 'none');
    }
    areImagesHidden = !areImagesHidden;
   }
   function moveWidget(position) {
    const aswMenu = document.getElementById('aswMenu');

    switch (position) {
        case 'top-left':
            aswMenu.style.top = '20px';
            aswMenu.style.left = '20px';
            aswMenu.style.right = 'auto'; // Reset right
            aswMenu.style.bottom = 'auto'; // Reset bottom
            break;
        case 'top-right':
            aswMenu.style.top = '20px';
            aswMenu.style.right = '20px';
            aswMenu.style.left = 'auto'; // Reset left
            aswMenu.style.bottom = 'auto'; // Reset bottom
            break;
        case 'bottom-left':
            aswMenu.style.bottom = '20px';
            aswMenu.style.left = '20px';
            aswMenu.style.right = 'auto'; // Reset right
            aswMenu.style.top = 'auto'; // Reset top
            break;
        case 'bottom-right':
            aswMenu.style.bottom = '20px';
            aswMenu.style.right = '20px';
            aswMenu.style.left = 'auto'; // Reset left
            aswMenu.style.top = 'auto'; // Reset top
            break;
    }
}$(document).ready(function () {
    // Elements for dropdown and profile buttons
    const profileToggle = $("#profile-toggle");
    const profilesMenu = $("#profiles-menu");
    const profileButtons = $(".profile-option");
    const rulerButton = $("#ruler-btn");
    const contrastButton = $("#contrast-btn");

    // Toggle dropdown visibility when clicking on the 'Accessibility Profiles' button
    profileToggle.click(function () {
        // Toggle the class to show/hide the menu
        $(".dropdown").toggleClass("open");
    });

    // When a profile is clicked, handle its actions
    profileButtons.click(function () {
        const profile = $(this).data("profile");

        // Remove active class from all profile buttons and add it to the clicked one
        profileButtons.removeClass("active");
        $(this).addClass("active");

        // Reset features before activating new ones
        resetFeatures();

        // Activate features based on the selected profile
        switch (profile) {
            case "motor-impaired":
                // Activate features for motor-impaired (example: enlarge buttons
                startScreenReader();

                break;
            case "blind":
                // Activate screen reader or other features for blind users
                startScreenReader();
                break;
            case "color-blind":
                // Activate color-blind specific features
                toggleHighSaturation();
                adjustFontWeight(increment = 100)
                adjustLineHeight(increment = 0)
                enableHighlightHeadings(load = false)
                adjustFontSize(multiply = 0.1)
                break;
            case "dyslexia":
                // Activate dyslexia-friendly features
                break;
            case "adhd":
                // Activate ADHD features like ruler and contrast
                activateRuler();
                activateContrast();
                enableDyslexicFont(load = true)
                enableBigCursor(load = false)
                break;
            default:
                break;
        }
    });

    // Function to reset all features
    function resetFeatures() {
        rulerButton.removeClass("active");
        contrastButton.removeClass("active");
    }

    // Function to activate the ruler feature
    function activateRuler() {
        rulerButton.addClass("active");
        // Add logic for ruler functionality (e.g., display ruler on the page)
    }

    // Function to activate the contrast feature
    function activateContrast() {
        contrastButton.addClass("active");
        // Add logic to apply contrast (e.g., darken the page)
    }

    // Close the widget when clicking the close button
    $("#close-widget-btn").click(function () {
        $(".asw-menu").hide();
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const moveWidgetMenu = document.getElementById("move-widget-menu");
    const moveWidgetBtn = document.getElementById("move-widget-btn");
    const moveWidgetButtons = document.querySelectorAll(".move-widget-option");
    const widget = document.getElementById("accessibility-widget");
  
    // Toggle move widget menu
    moveWidgetBtn.addEventListener('click', function () {
      const moveWidgetList = document.getElementById("move-widget-list");
      moveWidgetList.style.display = moveWidgetList.style.display === 'block' ? 'none' : 'block';
    });
  
    // Move the widget based on button click
    moveWidgetButtons.forEach(button => {
      button.addEventListener('click', function () {
        const position = this.getAttribute("data-position");
        moveWidget(position);
      });
    });
  
    // Function to move widget
    function moveWidget(position) {
      switch (position) {
        case 'top-left':
          widget.style.top = '20px';
          widget.style.left = '20px';
          widget.style.bottom = '';
          widget.style.right = '';
          break;
        case 'top-right':
          widget.style.top = '20px';
          widget.style.right = '20px';
          widget.style.bottom = '';
          widget.style.left = '';
          break;
        case 'bottom-left':
          widget.style.bottom = '20px';
          widget.style.left = '20px';
          widget.style.top = '';
          widget.style.right = '';
          break;
        case 'bottom-right':
          widget.style.bottom = '20px';
          widget.style.right = '20px';
          widget.style.top = '';
          widget.style.left = '';
          break;
        default:
          console.log('Invalid position');
      }
    }
  });
  