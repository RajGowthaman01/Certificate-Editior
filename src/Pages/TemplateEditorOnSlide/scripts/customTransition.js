// import {cubicOut} from 'svelte/easing'
export const custom = (node, params) => {
  return {
      easing: params.easing,
    duration: params.duration || 1500,
      // delay:3000,
      css: (t) =>
				`transform: translateX(${(t-0.9)*10}px)`
		}
}
  
//slidediag function
import {cubicOut} from 'svelte/easing'
export const slideDiag = (node, options={
    delay : 0,
    duration : 400,
    easing : cubicOut
}) => {
    const style = getComputedStyle(node);
    const opacity = +style.opacity;
    const height = parseFloat(style.height);
    const width = parseFloat(style.width);
    const padding_top = parseFloat(style.paddingTop);
    const padding_bottom = parseFloat(style.paddingBottom);
    const padding_left = parseFloat(style.paddingLeft);
    const padding_right = parseFloat(style.paddingRight);
    const margin_top = parseFloat(style.marginTop);
    const margin_bottom = parseFloat(style.marginBottom);
    const margin_left = parseFloat(style.marginLeft);
    const margin_right = parseFloat(style.marginRight);
    const border_top_width = parseFloat(style.borderTopWidth);
    const border_bottom_width = parseFloat(style.borderBottomWidth);
    const border_left_width = parseFloat(style.borderLeftWidth);
    const border_right_width = parseFloat(style.borderRightWidth);

    return {
        delay: options.delay,
        duration: options.duration,
        easing: options.easing,
        css: t =>
            `overflow: hidden;` +
            `opacity: ${Math.min(t * 20, 1) * opacity};` +
            `height: ${t * height}px;` +
            `width: ${t * width}px;` +
            `padding-top: ${t * padding_top}px;` +
            `padding-bottom: ${t * padding_bottom}px;` +
            `padding-left: ${t * padding_left}px;` +
            `padding-right: ${t * padding_right}px;` +
            `margin-top: ${t * margin_top}px;` +
            `margin-bottom: ${t * margin_bottom}px;` +
            `margin-left: ${t * margin_left}px;` +
            `margin-right: ${t * margin_right}px;` +
            `border-top-width: ${t * border_top_width}px;` +
            `border-bottom-width: ${t * border_bottom_width}px;` +
            `border-left-width: ${t * border_left_width}px;` +
            `border-right-width: ${t * border_right_width}px;`
    };
}

//horiontal slide
export const customHorizontalSlide = (node, {
	delay = 0,
	duration = 400,
	easing = cubicOut,
	direction = 'block'
} = {}) => {
	const style = getComputedStyle(node);
	const opacity = +style.opacity;
	
	const capitalized_logical_property = `${direction[0].toUpperCase()}${direction.slice(1)}`;
	
	const size_value = parseFloat(style[`${direction}Size`]);
	const padding_start_value = parseFloat(style[`padding${capitalized_logical_property}Start`]);
	const padding_end_value = parseFloat(style[`padding${capitalized_logical_property}End`]);
	const margin_start_value = parseFloat(style[`margin${capitalized_logical_property}Start`]);
	const margin_end_value = parseFloat(style[`margin${capitalized_logical_property}End`]);
	const border_width_start_value = parseFloat(style[`border${capitalized_logical_property}StartWidth`]);
	const border_width_end_value = parseFloat(style[`border${capitalized_logical_property}EndWidth`]);
	
	return {
		delay,
		duration,
		easing,
		css: t =>
			'overflow: hidden;' +
			`opacity: ${Math.min(t * 20, 1) * opacity};` +
			`${direction}-size: ${t * size_value}px;` +
			`padding-${direction}-start: ${t * padding_start_value}px;` +
			`padding-${direction}-end: ${t * padding_end_value}px;` +
			`margin-${direction}-start: ${t * margin_start_value}px;` +
			`margin-${direction}-end: ${t * margin_end_value}px;` +
			`border-${direction}-start-width: ${t * border_width_start_value}px;` +
			`border-${direction}-start-width: ${t * border_width_end_value}px;`
	};
}