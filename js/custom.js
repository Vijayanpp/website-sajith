
    
 
 
"use strict";
jQuery(document).ready(function() {
    var masory_epl;
    var menu_height;
    var map_change;


    /*1. - Go to Top*/
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 200) {
            jQuery('.real_scroll_top').fadeIn();
        } else {
            jQuery('.real_scroll_top').fadeOut();
        }
    });

    jQuery('.real_scroll_top').on('click', function() {
        jQuery("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    if (jQuery('#real_menu_scroll').length) {
        jQuery("#real_menu_scroll").mCustomScrollbar();
    }

    /*2. - Hambeger Menu*/
    if(jQuery('#real_menu_scroll').length){
        jQuery('.more-setting span').on('click', function(){
            jQuery('#real_menu_scroll').toggleClass('active-scroll-menu');
        });
        jQuery('.real_close_menu_scroll span').on('click', function(){
            jQuery('#real_menu_scroll').removeClass('active-scroll-menu');
        })
    }

    if(jQuery('.real_menu_click').length){
       
        jQuery('.real_menu_click .menu-item-has-children a').on('click', function(){
           
            var $ul = jQuery(this).next('ul');
            if($ul.hasClass('active-children-menu')){
                $ul.removeClass('active-children-menu').slideUp();
            }else{
                jQuery('.real_menu_click .active-children-menu').removeClass('active-children-menu').slideUp();
                $ul.addClass('active-children-menu').slideDown();
            }
            
        })
    }

    /*3. - Search Menu*/
    if (jQuery('.real_search').length > 0) {
        jQuery('.real_search.real_style_01 .fa-search').on('click', function() {
            jQuery('.real_search form').toggle(300);
            jQuery(this).toggleClass('remove');
        });
    } 

    /*4. - Main Menu*/
    jQuery('.real_primary_menu').superfish({
        delay: 200,
        speed: 'fast',
        popUpSelector: 'ul,.real_wrap_menu',
        autoArrows: true,
    });


    /*5. - Main Slider*/
    if (jQuery('.real_widget_slider').length > 0) {
        var sp1 = jQuery('.slider-pro');
        sp1.sliderPro({
            height: 295,
            forceSize: 'fullWidth',
            arrows: true,
            buttons: false,
            waitForLayers: false,
            autoplay: false,
            fadeOutPreviousSlide: false,
            fadeArrows: false,
            autoScaleLayers: true,
            slideDistance: 0,
            autoplayDelay: 5000,
            breakpoints: {
                1024: {
                    height: 295,
                }
            },
            init: function() {
                jQuery(".real_widget_slider .loading").hide();
                jQuery(".real_widget_slider .slider-pro").show();
                jQuery(".real_widget_slider .sp-image.sp-image-bg").css({
                    "margin-top": "0",
                    "margin-left": "0"
                });
            }
        });
    };

    /*6. - OwlCarousel*/
    if (jQuery('.real-widget-contact-user').length) {
        jQuery('.real-widget-contact-user .real-slider').owlCarousel({
            items: 1,
            navigation: true,
            pagination: false,
            navigationText: false,
            itemsTablet: [1920,1],
        })
    }
    if (jQuery('.real_widget_intro_3_has_owl').length) {
        var owl = jQuery(".real_widget_intro_3_has_owl .widget-content .real_wrap_owl");
        owl.owlCarousel({
            items: 3,
            itemsDesktop: [1000, 3],
            itemsDesktopSmall: [900, 2],
            itemsTablet: [600, 1],
            itemsMobile: false,
            navigation: true,
            pagination: false,
            autoplay: false,
            navigationText: [
                "Previous Post",
                "Next Post"
            ],
        });
    }
    if (jQuery('.real_widget_intro_2_has_owl').length) {
        var owl = jQuery(".real_widget_intro_2_has_owl .widget-content .real_wrap_owl");
        owl.owlCarousel({
            items: 2,
            itemsDesktop: [1000, 1],
            itemsDesktopSmall: [900, 1],
            itemsTablet: [600, 1],
            itemsMobile: false,
            navigation: true,
            pagination: false,
            autoplay: false,
            navigationText: [
                "PREV",
                "NEXT"
            ],
        });
    }
    if (jQuery('.real_widget_owl_img').length) {
        var owl = jQuery(".real_widget_owl_img .widget-content .real_wrap_owl");
        owl.owlCarousel({
            items: 1,
            itemsDesktop: [1000, 1],
            itemsDesktopSmall: [900, 1],
            itemsTablet: [600, 1],
            itemsMobile: false,
            navigation: true,
            pagination: false,
            autoplay: false,
            navigationText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
        });
    }
    if (jQuery('.real_widget_list_blockquote').length) {
        var owl = jQuery(".real_widget_list_blockquote .widget-content .real_wrap_owl");
        owl.owlCarousel({
            items: 1,
            itemsDesktop: [1000, 1],
            itemsDesktopSmall: [900, 1],
            itemsTablet: [600, 1],
            itemsMobile: false,
            navigation: false,
            pagination: true,
            autoplay: false,
        });
    }
    if (jQuery('.real_widget_testimonial').length) {
        var owl = jQuery(".real_widget_testimonial .widget-content .real_wrap_owl");
        owl.owlCarousel({
            items: 1,
            itemsDesktop: [1000, 1],
            itemsDesktopSmall: [900, 1],
            itemsTablet: [600, 1],
            itemsMobile: false,
            navigation: true,
            pagination: false,
            autoplay: false,
            navigationText: [
                "Prev",
                "Next"
            ],
        });
    }
    if (jQuery('.entry-thumb.real_has_owl').length) {
        var owl = jQuery(".entry-thumb.real_has_owl");
        owl.owlCarousel({
            items: 1,
            itemsDesktop: [1000, 1],
            itemsDesktopSmall: [900, 1],
            itemsTablet: [600, 1],
            itemsMobile: false,
            navigation: false,
            pagination: true,
            autoplay: false,
        });
    }
    if (jQuery('.real-widget-testimonial').length) {
        var owl = jQuery('.carousel-area')
        owl.owlCarousel({
            items: 1,
            itemsDesktop: [1000, 1],
            itemsDesktopSmall: [900, 1],
            itemsTablet: [600, 1],
            itemsMobile: true,
            navigation: true,
            navigationText: false,
            pagination: false,
            autoplay: false,
            // margin:15,
        })
    }

    /*7. - Masonry*/

    if (jQuery('.grid').length) {
        jQuery('.grid').imagesLoaded(function() {
            var masonry = jQuery('.grid').masonry({
                itemSelector: '.grid-items',
                columnWidth: 1,
            });
        });
    }
    if (jQuery('.real_widget_shop_layout_1').length) {
        var kivv_mal = jQuery('.real_widget_shop_layout_1 .widget-content >.products').masonry({
            itemSelector: 'li',
            columnWidth: 1,
            isAnimated: true,
        });
        kivv_mal.masonry('layout');
    }
    if (jQuery('.real_widget_shop_layout_2').length) {
        var kivv_mal = jQuery('.real_widget_shop_layout_2 .widget-content >.products').masonry({
            itemSelector: 'li',
            columnWidth: 1,
            isAnimated: true,
        });
        kivv_mal.masonry('layout');
    }
    if (jQuery('.real_widget_shop_layout_3').length) {
        var kivv_mal = jQuery('.real_widget_shop_layout_3 .widget-content >.products').masonry({
            itemSelector: 'li',
            columnWidth: 1,
            isAnimated: true,
        });
        kivv_mal.masonry('layout');
    }

    /*8. - Skill Pro*/
    if (jQuery('.real_skill').length > 0) {
        jQuery(".skill_01").progressbar({
            value: 60,
        });
        jQuery(".skill_02").progressbar({
            value: 70,
        });
        jQuery(".skill_03").progressbar({
            value: 80,
        });
        jQuery(".skill_04").progressbar({
            value: 50,
        });
        jQuery(".skill_06").progressbar({
            value: 60,
        });
        jQuery(".skill_07").progressbar({
            value: 70,
        });
        jQuery(".skill_08").progressbar({
            value: 80,
        });
        jQuery(".skill_05").progressbar({
            value: 50,
        });
    }

    /*9. - Filter*/
    if (jQuery('.real_widget_has_filter').length > 0) {
        var container_01 = jQuery('.real_widget_has_filter .real_filter_content >ul');
        var masonryOptions = {
            columnWidth: 1,
            itemSelector: '.col-lg-3'
        };

        container_01.imagesLoaded(function() {
            var m_grid = container_01.masonry(masonryOptions);
            var m_filters_01 = jQuery('.real_widget_has_filter .filters-options li');

            m_filters_01.on('click', function(event) {
                event.preventDefault();
                m_filters_01.removeClass('active');
                jQuery(this).addClass('active');
                var m_filter_val = jQuery(this).data('val');
                container_01.find('.col-lg-3').each(function() {
                    var m_item_val = jQuery(this).data('val').toString().split(',');
                    var a = m_item_val.indexOf(m_filter_val.toString()) > -1;
                    if (m_filter_val == "*") {
                        jQuery(this).removeClass('hide');
                        jQuery(this).addClass('show');
                    } else {
                        if (a == true) {
                            jQuery(this).removeClass('hide');
                            jQuery(this).addClass('show');
                        } else {
                            jQuery(this).removeClass('show');
                            jQuery(this).addClass('hide');
                        }
                    }
                });

                container_01.masonry('layout');
            });

        });
    }


    /*10. - Match Height*/
    function mh_1() {
        jQuery('.ul-mh').children().matchHeight();
    }
    if (jQuery('.ul-mh').length) {
        mh_1();
    }

    function mh_2() {
        jQuery('.ul-mh2').children().matchHeight();
    }
    if (jQuery('.ul-mh2').length) {
        mh_2();
    }

    jQuery('.ul-mh3').children().matchHeight();

    
    if (jQuery('.target-items-2').length) {
        jQuery('.target-items-2').matchHeight({
            target: jQuery('.target-items-1'),
            property: 'height'
        });
    }
    

    /*11. - Gmap*/
    if (jQuery('.real_widget_map').length) {
        jQuery(function() {
            jQuery('.real_widget_map #epl-advanced-map')
                .gmap3({
                    center: [48.8620722, 2.352047],
                    zoom: 11,
                    styles: [{ "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{ "color": "#444444" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#eeeeee" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 45 }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit.station.bus", "elementType": "labels.icon", "stylers": [{ "saturation": "-16" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#649cd5" }, { "visibility": "on" }] }]
                })
                .marker([
                    { position: [48.8620722, 2.352047], icon: "img/icon/map2.png" },


                ])


        });
    }

    if (jQuery('.epl_tabbed_map_wrapper').length) {
        jQuery(function() {
            jQuery('.epl_tabbed_map_wrapper #epl-advanced-map')
                .gmap3({
                    center: [48.8620722, 2.352047],
                    zoom: 11,

                    styles: [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }]
                })
                .marker([
                    { position: [48.8620722, 2.352047], icon: "img/icon/map2.png" },

                ])


        });
    }

    if (jQuery('.real_widget_map').length) {
        jQuery(function() {
            jQuery('.real_widget_map.real_style_03 #epl-advanced-map')
                .gmap3({
                    center: [48.8620722, 2.352047],
                    zoom: 11,
                    scrollwheel: false,
                    styles: [{ "featureType": "landscape", "stylers": [{ "hue": "#FFBB00" }, { "saturation": 43.400000000000006 }, { "lightness": 37.599999999999994 }, { "gamma": 1 }] }, { "featureType": "road.highway", "stylers": [{ "hue": "#FFC200" }, { "saturation": -61.8 }, { "lightness": 45.599999999999994 }, { "gamma": 1 }] }, { "featureType": "road.arterial", "stylers": [{ "hue": "#FF0300" }, { "saturation": -100 }, { "lightness": 51.19999999999999 }, { "gamma": 1 }] }, { "featureType": "road.local", "stylers": [{ "hue": "#FF0300" }, { "saturation": -100 }, { "lightness": 52 }, { "gamma": 1 }] }, { "featureType": "water", "stylers": [{ "hue": "#0078FF" }, { "saturation": -13.200000000000003 }, { "lightness": 2.4000000000000057 }, { "gamma": 1 }] }, { "featureType": "poi", "stylers": [{ "hue": "#00FF6A" }, { "saturation": -1.0989010989011234 }, { "lightness": 11.200000000000017 }, { "gamma": 1 }] }]
                })
                .marker([
                    { position: [48.8620722, 2.352047], icon: "img/icon/map2.png" },
                    
                ])


        });
    }

    if (jQuery('.real_widget_map.real_style_02').length) {
        jQuery('.real_widget_map.real_style_02 .real_map').height("530px").gmap3({
                map: {
                    options: {
                        zoom: 15,
                        mapTypeControl: false,
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                    }
                },
                trafficlayer: {},
                marker: {
                    values: [{
                        address: "Ha Noi, Viet Nam",
                        options: {
                            icon: new google.maps.MarkerImage(
                                "images/map-3.png",
                                new google.maps.Size(42, 58, "px", "px")
                            )
                        }
                    }, {
                        address: "Nam Dinh, Viet Nam",
                        options: {
                            icon: new google.maps.MarkerImage(
                                "images/map-3.png",
                                new google.maps.Size(42, 58, "px", "px")
                            )
                        }
                    }, {
                        address: "Hung Yen, Viet Nam",
                        options: {
                            icon: new google.maps.MarkerImage(
                                "images/map-3.png",
                                new google.maps.Size(42, 58, "px", "px")
                            )
                        }
                    }, {
                        address: "Hai Duong, Viet Nam",
                        options: {
                            icon: new google.maps.MarkerImage(
                                "images/map-3.png",
                                new google.maps.Size(42, 58, "px", "px")
                            )
                        }
                    }, ],

                }
            },
            "autofit");
    }

    if (jQuery('.real_widget_map.real_style_04').length) {
        jQuery('.real_widget_map.real_style_04 .real_map').height("330px").gmap3({
                map: {
                    options: {
                        maxZoom: 13,
                        mapTypeControl: false,
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                    }
                },
                marker: {
                    values: [{
                        address: "grand st,new york",
                        options: {
                            icon: new google.maps.MarkerImage(
                                "images/map-4.png",
                                new google.maps.Size(42, 58, "px", "px")
                            )
                        }
                    }, {
                        address: "park slope,new york",
                        options: {
                            icon: new google.maps.MarkerImage(
                                "images/map-6.png",
                                new google.maps.Size(49, 49, "px", "px")
                            )
                        }
                    }, {
                        address: "bayonne,new york",
                        options: {
                            icon: new google.maps.MarkerImage(
                                "images/map-4.png",
                                new google.maps.Size(42, 58, "px", "px")
                            )
                        }
                    }, {
                        address: "water st,new york",
                        options: {
                            icon: new google.maps.MarkerImage(
                                "images/map-7.png",
                                new google.maps.Size(49, 49, "px", "px")
                            )
                        }
                    }, ],
                }
            },
            "autofit");
    }
    if (jQuery('#epl_adv_tab_map_sat').length) {
        var map_change = jQuery('#epl_adv_tab_map_sat').height("315px").gmap3({
                map: {
                    options: {
                        maxZoom: 13,
                        mapTypeControl: false,
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                    }
                },
                marker: {
                    address: "new york",
                    options: {
                        icon: new google.maps.MarkerImage(
                            "images/map-4.png",
                            new google.maps.Size(42, 58, "px", "px")
                        )
                    }
                }
            },
            "autofit");
    }

    /*12. - Wow Scroll*/
    // if (jQuery('.real_wow').length) {
    //     var wow = new WOW({
    //         boxClass: 'real_wow',
    //     });
    //     wow.init();
    // }

    /*13. - Validate Form*/
    if (jQuery('.real_form_comment.real_style_03').length) {
        jQuery('.real_form_comment.real_style_03').validate({
            // Add requirements to each of the fields
            rules: {
                name: {
                    required: true,
                    minlength: 10
                },
                email: {
                    required: true,
                    email: true
                },
                web: {
                    required: true,
                    minlength: 10
                },
                message: {
                    required: true,
                    minlength: 15
                }
            },
            messages: {
                name: {
                    required: "Please enter your name.",
                    minlength: jQuery.format("At least {0} characters required.")
                },
                email: {
                    required: "Please enter your email.",
                    email: "Please enter a valid email."
                },
                phone: {
                    required: "Please enter your phone.",
                    url: "Please enter a valid phone."
                },
                message: {
                    required: "Please enter a message.",
                    minlength: jQuery.format("At least {0} characters required.")
                }
            },
            submitHandler: function(form) {
                jQuery(".real_form_comment.real_style_03").attr("value", "Sending...");
                jQuery(form).ajaxSubmit({
                    success: function(responseText, statusText, xhr, jQueryform) {
                        jQuery("#response-1").html(responseText).hide().slideDown("fast");
                        jQuery(".real_form_comment.real_style_03").attr("value", "Submit");
                    }
                });
                return false;
            }
        });
    }
    if (jQuery('.real_form_comment.real_style_02').length) {
        jQuery('.real_form_comment.real_style_02').validate({
            // Add requirements to each of the fields
            rules: {
                name: {
                    required: true,
                    minlength: 10
                },
                email: {
                    required: true,
                    email: true
                },
                web: {
                    required: true,
                    minlength: 10
                },
                message: {
                    required: true,
                    minlength: 15
                }
            },
            // Specify what error messages to display
            // when the user does something horrid
            messages: {
                name: {
                    required: "Please enter your name.",
                    minlength: jQuery.format("At least {0} characters required.")
                },
                email: {
                    required: "Please enter your email.",
                    email: "Please enter a valid email."
                },
                phone: {
                    required: "Please enter your phone.",
                    url: "Please enter a valid phone."
                },
                message: {
                    required: "Please enter a message.",
                    minlength: jQuery.format("At least {0} characters required.")
                }
            },
            // Use Ajax to send everything to processForm.php
            submitHandler: function(form) {
                jQuery(".real_form_comment.real_style_02").attr("value", "Sending...");
                jQuery(form).ajaxSubmit({
                    success: function(responseText, statusText, xhr, jQueryform) {
                        jQuery("#response-1").html(responseText).hide().slideDown("fast");
                        jQuery(".real_form_comment.real_style_02").attr("value", "Submit");
                    }
                });
                return false;
            }
        });
    }
    if (jQuery('.real_form_comment.real_style_01').length) {
        jQuery('.real_form_comment.real_style_01').validate({
            // Add requirements to each of the fields
            rules: {
                name: {
                    required: true,
                    minlength: 10
                },
                email: {
                    required: true,
                    email: true
                },
                web: {
                    required: true,
                    minlength: 10
                },
                message: {
                    required: true,
                    minlength: 15
                }
            },
            // Specify what error messages to display
            // when the user does something horrid
            messages: {
                name: {
                    required: "Please enter your name.",
                    minlength: jQuery.format("At least {0} characters required.")
                },
                email: {
                    required: "Please enter your email.",
                    email: "Please enter a valid email."
                },
                phone: {
                    required: "Please enter your phone.",
                    url: "Please enter a valid phone."
                },
                message: {
                    required: "Please enter a message.",
                    minlength: jQuery.format("At least {0} characters required.")
                }
            },
            // Use Ajax to send everything to processForm.php
            submitHandler: function(form) {
                jQuery(".real_form_comment.real_style_02").attr("value", "Sending...");
                jQuery(form).ajaxSubmit({
                    success: function(responseText, statusText, xhr, jQueryform) {
                        jQuery("#response-1").html(responseText).hide().slideDown("fast");
                        jQuery(".real_form_comment.real_style_02").attr("value", "Submit");
                    }
                });
                return false;
            }
        });
    }
    if (jQuery('#commentform').length) {
        jQuery('#commentform').validate({
            // Add requirements to each of the fields
            rules: {
                name: {
                    required: true,
                    minlength: 10
                },
                email: {
                    required: true,
                    email: true
                },
                web: {
                    required: true,
                    minlength: 10
                },
                message: {
                    required: true,
                    minlength: 15
                }
            },
            // Specify what error messages to display
            // when the user does something horrid
            messages: {
                name: {
                    required: "Please enter your name.",
                    minlength: jQuery.format("At least {0} characters required.")
                },
                email: {
                    required: "Please enter your email.",
                    email: "Please enter a valid email."
                },
                phone: {
                    required: "Please enter your phone.",
                    url: "Please enter a valid phone."
                },
                message: {
                    required: "Please enter a message.",
                    minlength: jQuery.format("At least {0} characters required.")
                }
            },
            // Use Ajax to send everything to processForm.php
            submitHandler: function(form) {
                jQuery(".commentform").attr("value", "Sending...");
                jQuery(form).ajaxSubmit({
                    success: function(responseText, statusText, xhr, jQueryform) {
                        jQuery("#response-1").html(responseText).hide().slideDown("fast");
                        jQuery(".commentform").attr("value", "Submit");
                    }
                });
                return false;
            }
        });
    }
    if (jQuery('#gform_wrapper_1 form').length) {
        jQuery('#gform_wrapper_1 form').validate({
            // Add requirements to each of the fields
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                web: {
                    required: true,
                    minlength: 10
                },
                message: {
                    required: true,
                    minlength: 15
                }
            },
            // Specify what error messages to display
            // when the user does something horrid
            messages: {
                name: {
                    required: "Please enter your name.",
                    minlength: jQuery.format("At least {0} characters required.")
                },
                email: {
                    required: "Please enter your email.",
                    email: "Please enter a valid email."
                },
                phone: {
                    required: "Please enter your phone.",
                    url: "Please enter a valid phone."
                },
                message: {
                    required: "Please enter a message.",
                    minlength: jQuery.format("At least {0} characters required.")
                }
            },
            // Use Ajax to send everything to processForm.php
            submitHandler: function(form) {
                jQuery(".commentform").attr("value", "Sending...");
                jQuery(form).ajaxSubmit({
                    success: function(responseText, statusText, xhr, jQueryform) {
                        jQuery("#response-1").html(responseText).hide().slideDown("fast");
                        jQuery(".commentform").attr("value", "Submit");
                    }
                });
                return false;
            }
        });
    }

    /*14. - Popup Login*/

    if(jQuery('.user-navigation').length){
        jQuery('.user-navigation a').on('click',function(e){
            e.preventDefault();
            jQuery('#pop-login').addClass('active-login');
        })
        jQuery('#pop-login .close').on('click',function(e){
            e.preventDefault();
            jQuery('#pop-login').removeClass('active-login');
        })
    }
    if(jQuery('#pop-login').length){
        jQuery('#pop-login .login-tabs li a').click(function (e) {
            e.preventDefault()
            jQuery(this).tab('show')
        })
    }

    /*15. - Jquery for EPL*/

    jQuery('.epl-switch-view ul li').on('click', function() {
        mh_1();
        jQuery('.epl-switch-view ul li').removeClass('epl-current-view');
        jQuery(this).addClass('epl-current-view');
        var view = jQuery(this).data('view');
        if (view == 'grid') {
            jQuery('.epl-property-blog').addClass('epl-listing-grid-view');
            // jQuery('.epl-listing-grid-view.epl-property-blog').each(function(index){
            //  index = index + 1;
            //  if((index > 0) && (index  % 3 == 0)){
            //      // jQuery(this).after('<div class="epl-clearfix"></div>'); 
            //  }
            // });
        } else {
            jQuery('.epl-property-blog').removeClass('epl-listing-grid-view');
        }

    });

    /*---------------epl listing search-----------------*/
    if (jQuery('.epl-search-tabs').length) {
        jQuery('.epl-search-tabs .tab-link').on('click', function() {
            var this_parent = jQuery(this).parent();
            this_parent.children().removeClass('epl-sb-current');
            jQuery(this).addClass('epl-sb-current');
            var link_li_val = jQuery(this).data('tab');
            var k = link_li_val.toString();

            var parent_big = jQuery('.epl-search-forms-wrapper');
            parent_big.children().removeClass('epl-sb-current');
            var k = "#" + k;
            console.log(k);
            jQuery('div').find(k).addClass('epl-sb-current');
        });
    }

    /*---------------epl listing tab-----------------*/
    if (jQuery('.epl-author-box-container').length) {
        jQuery('.epl-author-tabs .tab-link').on('click', function() {
            var this_parent = jQuery(this).parent();
            this_parent.children().removeClass('epl-author-current');
            jQuery(this).addClass('epl-author-current');
            var link_li_val = jQuery(this).data('tab');
            var k = link_li_val.toString();

            var parent_big = jQuery('.epl-author-box-outer-wrapper');
            parent_big.children().removeClass('epl-author-current');
            var k = "#" + k;
            console.log(k);
            jQuery('div').find(k).addClass('epl-author-current');
            if (k == "#tab-3" || k == "#tab-4") {
                jQuery('.epl-author-image').css('display', 'none');
            } else {
                jQuery('.epl-author-image').css('display', 'block');
            }
        });
    }
    /*---------------tab map-----------------*/
    if (jQuery('.epl_adv_map_list').length) {
        jQuery('.epl_adv_map_list >li').on('click', function() {
            var this_parent = jQuery(this).parent();
            this_parent.children().removeClass('maptab-current');
            jQuery(this).addClass('maptab-current');
            var link_li_val = jQuery(this).data('map');
            if (link_li_val == "sat") {
                map_change.gmap3("autofit");
            } else
            if (link_li_val == "bike") {
                map_change.gmap3("bicyclinglayer");
            } else
            if (link_li_val == "transit") {
                map_change.gmap3("trafficlayer");
            } else
            if (link_li_val == "comparables") {
                map_change.gmap3({
                    kmllayer: {
                        options: {
                            url: "http://gmap3.net/kml/rungis-desc.kml",
                            opts: {
                                suppressInfoWindows: true
                            }
                        },
                        events: {
                            click: function(kml, event) {
                                alert(event.featureData.description);
                            }
                        }
                    }
                });
            }
        });
    }

    /*16. - Sort by price on advanced search*/
    if (jQuery('.range-advanced-main').length) {
        $(".range-wrap").slider({
            range: true,
            min: 0,
            max: 4500000,
            values: [1000, 4500000],
            slide: function(event, ui) {
                $("#price").val("from $ " + ui.values[0] + " - to $" + ui.values[1]);
            }
        });
        $("#price").val("from $" + $(".range-wrap").slider("values", 0) +
            " - to $" + $(".range-wrap").slider("values", 1));
    };

    if (jQuery('.real-advanced-search').length) {

        jQuery('.real-advanced-search .top-search .active-btn-holder').on('click', function() {
            if (jQuery('.bottom-search').hasClass('active-advanced')) {
                jQuery('.bottom-search').removeClass('active-advanced')
            } else {
                jQuery('.bottom-search').addClass('active-advanced');
            }
        })
    }
    jQuery('.nav-tabs a').click(function(e) {
        e.preventDefault()
        jQuery(this).tab('show')
    })

    /*---------------instagram-----------------*/
    if (jQuery('.real_widget_instagram .widget-content .real_instagram').length) {
        jQuery('.real_widget_instagram .widget-content .real_instagram').each(function() {
            var $this = jQuery(this);
            var ins_Id = $this.attr('data-access-id');
            console.log(ins_Id);
            var ins_Token = $this.attr('data-access-token');
            var ins_count = $this.attr('data-count');
            $this.pongstgrm({
                accessId: ins_Id,
                accessToken: ins_Token,
                count: ins_count,
                show: 'recent',
                button: false,
                column: "real_width_in"
            });
        });
    }
    /*---------------accordion-----------------*/
    if (jQuery('.panel-group').length) {
        var panel_titles = jQuery('.panel-group .panel-title a');
        panel_titles.addClass("collapsed");
        jQuery('.panel-heading.active').find(panel_titles).removeClass("collapsed");
        panel_titles.on('click', function() {
            jQuery(this).closest('.panel-group').find('.panel-heading').removeClass('active');
            var pn_heading = jQuery(this).parents('.panel-heading');
            if (jQuery(this).hasClass('collapsed')) {
                pn_heading.addClass('active');
            } else {
                pn_heading.removeClass('active');
            }
        });
    }
    /*---------------fitvids video-----------------*/
    if (jQuery('.real_tab_video').length) {
        jQuery('.real_tab_video').fitVids();
    }
    if (jQuery('.real_wrap_video').length) {
        jQuery('.real_wrap_video').fitVids();
    }
    if (jQuery('.epl-video-container').length) {
        jQuery('.epl-video-container').fitVids();
    }
    if (jQuery('.elp-author-video').length) {
        jQuery('.elp-author-video').fitVids();
    }
    
    /*---------------video background-----------------*/
    if (jQuery('.real-has-video').length) {
        jQuery('.real-has-video .real_wrap_video').vimeofy({
            'url': 'http://vimeo.com/143842675',
            'color': '#00D8D8',
            'autoplay': true,
            'loop': true,
            'delay': 0
        });
    }
    /*---------------alert-----------------*/
    if (jQuery('.real_alert_box').length) {
        jQuery('.real_close').on('click', function() {
            jQuery(this).parent().toggle(300);
        });
    }
    
    /*---------------perrty photo-----------------*/
    if (jQuery('.real_modul_type_product_shop_single').length) {
        jQuery("a[data-rel ^='prettyPhoto']").prettyPhoto({
            hook: 'data-rel',
        });
    }

    /*Limit text*/
    var gal_text = jQuery('.real_widget_2_lager .property-content .entry-content')
    if (gal_text.length) {
        gal_text.each(function(i) {

            var len = jQuery(this).text().length;
            if (len > 100) {
                jQuery(this).text(jQuery(this).text().substr(0, 100) + '...');
            }
        });
    }

    function sj_area_space() {
        var w_w = jQuery(window).width(),
            ct_w = jQuery('.container').width();
        if (jQuery('.container').length == 0) {
            ct_w = 1170; //container width
        }
        var sp_w = (w_w - ct_w) / 2,
            pl_w = jQuery('.sj-plw'),
            pr_w = jQuery('.sj-prw');
        pl_w.css({
            "padding-left": sp_w
        });
        pr_w.css({
            "padding-right": sp_w
        });
    }

});

 var $homeSlider = $('#home-slider');
 var $body=$("body");
 var $firstSection = $('section:first');
   var $navBar = $('#navbar');
    var $asideNav = $('#aside-nav');
     var $window = $(window);
$(window).on('load', function() {
      $('#loader').delay(500).fadeOut();
      $('#mask').delay(1000).fadeOut('slow');
       initHomeSlider();
    initNavbar();
    initScroll()
})


function fixNavigationColor() {
    var currentSlide = $homeSlider.find('.slick-current .slide-wrap');
    if (
      $(currentSlide).hasClass('no-overlay') ||
      $(currentSlide).hasClass('white-overlay') ||
      $(currentSlide).hasClass('light-overlay')
    ) {
      $body.addClass('light-slide');
    } else {
      $body.removeClass('light-slide');
    }
  }


function initNavbar() {
    if (
      !$firstSection.is('.parallax-section, .dark-bg, .colored-bg') &&
      $homeSlider.length === 0
    ) {
      $navBar.addClass('stick');
    }

    if ($firstSection.is('.parallax-section.text-dark')) {
      $body.addClass('light-slide');
    }

    $navBar.find('.navigation-menu>li').slice(-2).addClass('last-elements');

    $('.menu-toggle, .toggle-nav').on('click', function(event) {
      event.preventDefault();
      if ($window.width() < 992) {
        $(this).find('.hamburger').toggleClass('is-active');

        $('#navigation').slideToggle(400);
        $navBar.find('.cart-open').removeClass('opened');
      }
    });

    $.merge($navBar, $asideNav).on('click', '.navigation-menu li.menu-item-has-children>a', function(e) {
      if ($window.width() < 992) {
        e.preventDefault();
        $(this).parent('li').toggleClass('opened').find('.submenu:first').slideToggle();
      }
    });

    $('#navigation .navigation-menu a[data-scroll="true"]').on('click', function() {
      if ($window.width() < 992) {
        $('.menu-toggle').trigger('click');
      }
    });

    $body.scrollspy({
      target: '#navigation',
    });

    $navBar.on('click', '.cart-open>a', function(event) {
      if ($window.width() < 992) {
        event.preventDefault();
        event.stopPropagation();

        if ($('#navigation').is(':visible')) {
          $('.menu-toggle').trigger('click');
        }

        $(this).parent('.cart-open').toggleClass('opened');
      }
    });
  }

  function initScroll() {
    $window
      .on('scroll', function() {
        if (
          $firstSection.is('.parallax-section, .dark-bg, .home-section, .colored-bg, .gradient-bg') ||
          $homeSlider.length
        ) {
          if ($window.width() > 991) {
            if ($window.scrollTop() >= 150) {
              $navBar.addClass('stick');
            } else {
              $navBar.removeClass('stick');
            }

            if ($firstSection.hasClass('section-bordered')) {
              if ($window.scrollTop() <= 20) {
                $body.addClass('top-spacing');
              } else {
                $body.removeClass('top-spacing');
              }
            }
          }
        }

        //initParallax();
      })
      .trigger('scroll');
  }


function initHomeSlider() {
    $homeSlider.parent('section').addClass('home-section');

    var animateContent = function() {
      var delay = 100;
      var currentSlide = $homeSlider.find('.slick-current');

      if ($(currentSlide).find('.slide-wrap').hasClass('light')) {
        $body.addClass('light-slide');
      } else {
        $body.removeClass('light-slide');
      }

      $homeSlider.find('.slick-current .slide-content > .container').children().each(function() {
        var $content = $(this);
        setTimeout(
          function() {
            $content.css({
              opacity: 1,
              '-webkit-transform': 'scale(1)',
              '-moz-transform': 'scale(1)',
              transform: 'scale(1)',
            });
          },
          delay
        );

        delay += 400;
      });
    };

    $homeSlider.closest('section').addClass('p-0').append('<div class="slide-arrows"></div>');

    $homeSlider.find('.slide-item>img').each(function(index, el) {
      var slide = $(el).parent('.slide-item');
      var image = $(el).attr('src');
      var template = '<div class="row-parallax-bg">';
      template += '<div class="parallax-wrapper">';
      template += '<div class="parallax-bg" style="background-image: url(' + image + ')">';
      template += '</div></div></div>';

      if ($homeSlider.data('disable-parallax')) {
        template = '<div class="slide-image" style="background-image: url(' + image + ')"></div>';
      }

      $(slide).prepend(template);
      $(el).remove();
    });

    $homeSlider.on('init', function(event) {
      $('.slide-arrows').appendTo($homeSlider);
      animateContent();
      fixNavigationColor();
      if (navigator.userAgent.indexOf('Firefox') === -1) {
        $('.slick-slide').addClass('image-scaling');
      }
      var vid = $homeSlider.find('.slick-current video');
      if (vid.length > 0) {
        $(vid).get(0).play();
      }
    });

    $homeSlider
      .slick({
        autoplay: true,
        autoplaySpeed: 7000,
        prevArrow: '<button type="button" class="slick-prev"><i class="hc-arrow-round-back"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="hc-arrow-round-forward"></i></button>',
        slickFilter: '.slide-arrows',
        appendArrows: $('.slide-arrows'),
        dots: true,
        dotsClass: 'slide-dots',
      })
      .on('beforeChange', function(event, slick, currentSlide) {
        $homeSlider.find('.slick-current .slide-content > .container').children().each(function() {
          var $content = $(this);
          $content.css({
            opacity: 0,
            '-webkit-transform': 'scale(.9)',
            '-moz-transform': 'scale(.9)',
            transform: 'scale(.9)',
          });
        });
      })
      .on('afterChange', function(event) {
        animateContent();
        fixNavigationColor();
      });
  }
