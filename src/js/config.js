var bgConfig = {
    type: 'base',
    className: 'bg',
    width: '100%',
    height: '100%',
    css: {
        position : 'absolute',
        backgroundImage: 'url(./src/images/section1.jpg)',
        backgroundSize: '100% 100%',                        
        backgroundRepeat: 'no-repeat',
        overflow : 'hidden',
        top: 0,
        left : 0
    },
    
}

var bg11Config = {
    type: 'base',
    className: 'bg11',
    width: '1600px',
    height: '850px',
    css: {
        backgroundImage: 'url(./src/images/bg11.png)',
        backgroundSize: '100% 100%',                        
        backgroundRepeat: 'no-repeat',
        position : 'absolute',
        top : 100,
        left : 0

    },
    animateIn: {
        
    },
    animateOut: {
        
    },
    delay: 200,
    
}

var bg12Config = {
    type: 'base',
    className: 'bg12',
    width: '100%',
    height: '392',
    css: {
        position : 'absolute',
        backgroundImage: 'url(./src/images/bg12.png)',
        backgroundSize: '100% 100%',                        
        backgroundRepeat: 'no-repeat',
        bottom : 90,
    },
    animateIn: {
        bottom : 90,
        opacity : 1,
    },
    animateOut: {
        bottom : 0,
        opacity : 0,
    },
    delay: 200,
    
}

var bg13Config = {
    type: 'base',
    className: 'bg13',
    width: '100%',
    height: '377px',
    css: {
        position : 'absolute',
        backgroundImage: 'url(./src/images/bg13.png)',
        backgroundSize: '100% 100%',                        
        backgroundRepeat: 'no-repeat',
        bottom : 0,
    },
    animateIn: {
        bottom : 0,
        opacity : 1,
    },
    animateOut: {
        bottom : -377,
        opacity : 0,
    },
    delay: 200,
    
}

var hgroup = {
    type: 'base',
    className: 'hgroup',
    width: '554',
    height: '176',
    css: {
        position : 'absolute',
        backgroundImage: 'url(./src/images/slogan.png)',
        backgroundSize: '100% 100%',                        
        backgroundRepeat: 'no-repeat',
        marginLeft : '-277px',
        top : '25%',
        left : '50%'
    },
    animateIn: {
        top : '25%', 
        opacity : 1,
    },
    animateOut: {
        top : 0,
        opacity : 0,
    },
    
}

var p11 = {
    type: 'base',
    className: 'p11',
    width: '600',
    height: '75',
    css: {
        position : 'absolute',
        marginLeft : -277,
        top : '50%',
        left : '50%',
        marginLeft : -300,
        color : '#94a7c6',
        lineHeight : '1.5em', 
    },
    text : '163邮箱126邮箱yeah邮箱网易邮箱6.0改变，不止所见。网易邮箱6.0版——2014年最具创意气质的重量级新邮箱，重生光华，为之瞩目。唯美的视觉设计和视觉化交互，无可替代的独创动态情景皮肤，多项国内创意产品专利技术，成就无与伦比的出众品味，无可比拟的美妙体验。',
    animateIn: {
        opacity : 1,
    },
    animateOut: {
      opacity : 0  
    },
    delay: 1100,
}

var bg2Config = {
    type: 'base',
    className: 'bg2',
    width: '100%',
    height: '100%',
    css: {
        position : 'absolute',
        top : 0,
        left : 0,
        backgroundImage : 'url(./src/images/section2.jpg)',
        backgroundSize : '100% 100%',
        backgroundRepeat : 'no-repeat'
    },
}

var bg21Config = {
    type: 'base',
    className: 'bg21',
    width: '819',
    height: '250',
    css: {
        position : 'absolute',
        bottom : '15%',
        left : '0',
        backgroundImage : 'url(./src/images/bg21.png)',
        backgroundSize : '100% 100%',
        backgroundRepeat : 'no-repeat',
        marginLeft : -688,
        opacity : 0,
    },
    animateIn : {
        left : '50%',
        opacity : 1,
    },
    animateOut : {
        left : 0,
        opacity : 0,
    }

}

var bg22Config = {
    type: 'base',
    className: 'bg22',
    width: '819',
    height: '299',
    css: {
        position : 'absolute',
        left : '50%',
        bottom : '15%',
        backgroundImage : 'url(./src/images/bg22.png)',
        backgroundSize : '100% 100%',
        backgroundRepeat : 'no-repeat',
        marginBottom : 70,
        opacity : 0,
    },
    animateIn : {
        marginLeft : -280,
        opacity : 1,
    },
    animateOut : {
        marginLeft : 200,
        opacity : 0,
    }
}

var bg23Config = {
    type: 'base',
    className: 'bg23',
    width: '819',
    height: '325',
    css: {
        position : 'absolute',
        left : '50%',
        bottom : '0',
        backgroundImage : 'url(./src/images/bg23.png)',
        backgroundSize : '100% 100%',
        backgroundRepeat : 'no-repeat',
        marginBottom : -20,
        marginLeft : -409,
        opacity : 0,
    },
    animateIn : {
        bottom : '15%',
        opacity : 1,
    },
    animateOut : {
        bottom : 0,
        opacity : 0,
    }
}

var h1Config = {
    type: 'base',
    className: 'h1',
    width: '512',
    height: '45',
    css: {
        position : 'absolute',
        left : '50%',
        top : '15%',
        marginBottom : 70,
        marginLeft : -256,
        fontSize : '24px',
        fontWeight : 500,
        color : '#748A9E',
        padding : '30px 100px 0',
        opacity : 0,
        fontSize : '12px',
    },
    text : '[ 视觉·简 ]',
    animateOut : {
        padding : '30px 100px 0',
        opacity : 0,
        fontSize : '12px'
    },
    animateIn : {
        padding : 0,
        opacity : 1,
        fontSize : '24px'
    }
}

var h2Config = {
    type: 'base',
    className: 'h2',
    width: '0',
    height: '0',
    css: {
        position : 'absolute',
        backgroundImage : 'url(./src/images/t2.png)',
        backgroundSize : '100% 100%',
        backgroundRepeat : 'no-repeat',
        backgroundPosition : 'center center',
        left : '50%',
        top : '15%',
        marginTop : 60,
        marginLeft : -6,
        fontSize : '12px',
        textIndent : -99999,
        opacity : 0,
    },
    animateOut : {
        width : 0,
        height : 0,
        marginLeft : -6,
        opacity : 0,
        fontSize : '12px'
    },
    animateIn : {
        marginLeft : -256,
        width : 512,
        height : 45,
        opacity : 1,
        fontSize : '24px'
    },
    text : '华丽蜕变，尽享愉悦之美',
}

var p3Config = {
    type: 'base',
    className: 'p3',
    width: '510',
    height : 84,
    css: {
        position : 'absolute',
        left : '50%',
        top : '15%',
        marginTop : 130,
        marginLeft : -255,
        fontSize : '16px',
        color : '#727F8C',
        lineHeight : '2em',
        opacity : 0,
    },
    text : '秉承网易邮箱经典的清新简洁的设计风格，邮箱 6.0 版带来全新一代的设计理念，更追求极致唯美的视觉设计、传承更多人文和艺术底蕴，华丽蜕变，带来更舒服更爽心悦目的视觉享受。',
    animateIn : {
        opacity : 1,
    },
    animateOut : {
        opacity : 0
    },
    delay : 1100,
}

var bg3Config = {
    type: 'base',
    className: 'bg3',
    width: '100%',
    height : '100%',
    css: {
        backgroundImage : 'url(./src/images/section3.jpg)',
        position : 'absolute',
        backgroundSize : '100% 100%',
        backgroundRepeat : 'no-repeat',
    }, 
};

var bg31Config = {
    type: 'base',
    className: 'bg31',
    width: '829',
    height : 472,
    css: {
        backgroundImage: 'url(./src/images/bg31.png)',
        position : 'absolute',
        left : '50%',
        bottom : 0,
        marginLeft : -396,
        marginBottom : '80px',
        opacity : 0,
    },
    animateIn : {
        opacity : 1
    },
    animateOut : {
        opacity : 0
    },
};

var bg32Config = {
    type: 'base',
    className: 'bg32',
    width: '829',
    height : 472,
    css: {
        backgroundImage: 'url(./src/images/bg32.png)',
        position : 'absolute',
        bottom : 0,
        backgroundRepeat : 'no-repeat',
        backgroundPosition : '470px bottom',
        left : '50%',
        marginLeft : -396,
        opacity : 0,
    },
    animateIn : {
        opacity : 1
    },
    animateOut : {
        opacity : 0
    },
};

var bg33Config = {
    type: 'base',
    className: 'bg32',
    width: '441',
    height : 380,
    css: {
        backgroundImage: 'url(./src/images/bg33.png)',
        position : 'absolute',
        bottom : 0,
        backgroundRepeat : 'no-repeat',
        marginLeft : '500px',
        left : '50%',
        opacity : 0,
    },
    animateIn : {
        marginLeft : -120,
        opacity : 1,
    },
    animateOut : {
        marginLeft : 500,
        opacity : 0,
    },
};

var P3h1Config = {
    type: 'base',
    className: 'h1',
    width: '0',
    height : 0,
    css: {
        position : 'absolute',
        top : '15%',
        marginLeft : '0px',
        left : '50%',
        fontSize : '0px',
        fontWeight : 500,
       
        color: '#748A9E',
        ZIndex : 100,
        opacity : 0,
    },
    text : '[视觉化交互设计]',
    animateIn : {
        width : 512,
        height : 45,
        marginLeft : -256,
        opacity : 1,
        fontSize : '24px',
    },
    animateOut : {
        width : 0,
        height : 0,
        marginLeft : 0,
        opacity : 0,
        fontSize : '0px',
    },
};

var P3h2Config = {
    type: 'base',
    className: 'h2',
    width: '0',
    height : 0,
    css: {
        backgroundImage : 'url(./src/images/t3.png)',
        backgroundSize : '100% 100%',
        backgroundRepeat : 'no-repeat',
        position : 'absolute',
        top : '15%',
        marginLeft : '0px',
        marginTop : '60px',
        left : '50%',
        fontSize : '24px',
        fontWeight : 500,
        textIndent : '-9999em',
        color: '#748A9E',
        ZIndex : 100,
        opacity : 0,
    },
    text : '心随眼动，感官直接体验',
    animateIn : {
        width : 512,
        height : 45,
        marginLeft : -256,
        opacity : 1,
    },
    animateOut : {
        width : 0,
        height : 0,
        marginLeft : 0,
        opacity : 0,
    },
};

var P3h3Config = {
    type: 'base',
    className: 'h3',
    width: '430',
    height : 45,
    css: {
        position : 'absolute',
        top : '15%',
        marginLeft : '-1440px',
        marginTop : '250px',
        left : '50%',
        fontSize : '16px',
        color: '#FFFDE1',
        opacity : 0,
    },
    text : '邮箱 6.0 版采用了全新的视觉化交互设计，通过对界面的整体风格设计、重要信息的视觉化处理以及元素本身的视觉传达优化，来实现产品流程设计和交互行为塑造。从视觉的角度出发，让用户无需多想，直接通过感官与产品进行交互。',
    animateIn : {
        marginLeft : -480,
        opacity : 1,
    },
    animateOut : {
        marginLeft : -1440,
        opacity : 0,
    },
};

var bg4Config = {
    type: 'base',
    className: 'bg4',
    width: '100%',
    height : '100%',
    css: {
        backgroundImage : 'url(./src/images/section4.jpg)',
        backgroundSize : '100% 100%',
        backgroundRepeat : 'no-repeat',
        position : 'absolute',
    },
};

var bg41config = {
    type: 'base',
    className: 'bg41',
    width: '100%',
    height : 372,
    css: {
        backgroundImage : 'url(./src/images/bg41.png)',
        backgroundRepeat : 'no-repeat',
        backgroundPosition : '50% 0',
        position : 'absolute',
        bottom : -372, 
        opacity : 0,
    },
    animateIn : {
        bottom : '15%',
        opacity : 1
    },
    animateOut : {
        bottom : -372,
        opacity : 0
    },
};

var bg42config = {
    type: 'base',
    className: 'bg42',
    width: '100%',
    height : 449,
    css: {
        backgroundImage : 'url(./src/images/bg42.png)',
        backgroundRepeat : 'no-repeat',
        backgroundPosition : '50% 0',
        position : 'absolute',
        
        bottom : -449,
        opacity : 0,
        zIndex : 10
    },
    animateIn : {
        bottom : '15%',
        opacity : 1
    },
    animateOut : {
        bottom : -449,
        opacity : 0
    },
    delay : 400
};

var bg43config = {
    type: 'base',
    className: 'bg43',
    width: '100%',
    height : 449,
    css: {
        backgroundImage : 'url(./src/images/bg43.png)',
        backgroundRepeat : 'no-repeat',
        backgroundPosition : '50% 0',
        position : 'absolute',
        marginBottom : -130,
        bottom : -449,
        opacity : 0,
        zIndex : 20,
    },
    animateIn : {
        bottom : '15%',
        opacity : 1
    },
    animateOut : {
        bottom : -449,
        opacity : 0
    },
    delay : 200
};

var P4h1Config = {
    type: 'base',
    className: 'h1',
    width: '0',
    height : 0,
    css: {
        position : 'absolute',
        top : '15%',
        marginLeft : '0px',
        left : '50%',
        fontSize : '0px',
        fontWeight : 500,
       
        color: '#748A9E',
        ZIndex : 100,
        opacity : 0,
    },
    text : '[动态情景皮肤]',
    animateIn : {
        width : 512,
        height : 45,
        marginLeft : -256,
        opacity : 1,
        fontSize : '24px',
    },
    animateOut : {
        width : 0,
        height : 0,
        marginLeft : 0,
        opacity : 0,
        fontSize : '0px',
    },
};

var P4h2Config = {
    type: 'base',
    className: 'h2',
    width: '0',
    height : 0,
    css: {
        backgroundImage : 'url(./src/images/t4.png)',
        backgroundSize : '100% 100%',
        backgroundRepeat : 'no-repeat',
        position : 'absolute',
        top : '15%',
        marginLeft : '0px',
        marginTop : '60px',
        left : '50%',
        fontSize : '24px',
        fontWeight : 500,
        textIndent : '-9999em',
        color: '#748A9E',
        ZIndex : 100,
        opacity : 0,
    },
    text : '美轮美奂，百变尽随你心',
    animateIn : {
        width : 512,
        height : 45,
        marginLeft : -256,
        opacity : 1,
    },
    animateOut : {
        width : 0,
        height : 0,
        marginLeft : 0,
        opacity : 0,
    },
};

var P4h3Config = {
    type: 'base',
    className: 'h3',
    width: '510',
    height : 45,
    css: {
        position : 'absolute',
        top : '15%',
        marginLeft : '-255px',
        marginTop : '130px',
        left : '50%',
        fontSize : '16px',
        color: '#727F8C',
        opacity : 0,
    },
    text : '国内首创动态情景皮肤，可以随着早晚时光，季节主题的变幻而自动切换，实现了在邮箱里也能感受天气和心情的变化，带来完全不同的页面体验并且呈现最佳视觉感受，还特别针对原有邮箱皮肤的对比度和色彩进行了微调，减少视觉疲劳感。',
    animateIn : {
        opacity : 1,
    },
    animateOut : {
        opacity : 0,
    },
    delay : 1300,
};