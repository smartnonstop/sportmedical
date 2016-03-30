/** This sets up responsive events for the flexible base template. 
 * It's on it's own in a separate JS file so it can be added to the top, next to scripts.js via pagebuilder (vs inline in the HTML). 
 * That way apps or other things could override this and remove responsiveness if they needed to 
 */
webmd.useragent.setupResponsive();
