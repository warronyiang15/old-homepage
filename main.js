var clear_func = () => {
    var c = document.getElementsByClassName('container')[0];
    while( c.childNodes.length > 0 ){
        c.removeChild( c.lastChild );
    }
}

var create_h1 = (str) => {
    var h = document.createElement('h1');
    h.innerHTML = str;
    h.style.position = 'relative';
    h.style.left = '10px';
    return h;
}

var create_h3 = (str) => {
    var h = document.createElement('h3');
    h.innerHTML = str;
    h.style.position = 'relative';
    h.style.left = '10px';
    h.style.color = 'gray';
    return h;
}

var create_title = (str) => {
    var h = document.createElement('h1');
    h.innerHTML = str;
    return h;
}

var create_subtitle = (str) => {
    var h2 = document.createElement('h2');
    h2.innerHTML = str;
    return h2;
}

var create_li = () => {
    var li = document.createElement('li');
    return li;
}

var create_p = (content) => {
    var p = document.createElement('p');
    p.innerHTML = content;
    return p;
}

var create_gray_p = (content) => {
    var p = document.createElement('p');
    p.innerHTML = content;
    p.style.color = 'gray';
    return p;
}

var create_special_p = (content) => {
    var p = document.createElement('p');
    p.innerHTML = content;
    p.style.position = 'relative';
    p.style.left = '10px';
    return p;
}

var create_div = (className) => {
    var dv = document.createElement('div');
    dv.className = className;
    return dv;
}

var create_img = (className, src) => {
    var img = document.createElement('img');
    img.className = className;
    img.src = src;
    return img;
}

var create_hr = (className) => {
    var hr = document.createElement('hr');
    hr.className = className;
    return hr;
}

var create_a = (href) => {
    var a = document.createElement('a');
    a.href = href;
    return a;
}

var create_card = (name, content, link, logo_src) => {
    var card = create_div('project-card');
    var card_header = create_div('project-card-header');
    var card_details = create_div('project-card-details');

    card_header.appendChild(create_title(name));
    card_header.appendChild(create_gray_p(content));
    card.addEventListener('click', () => {
        window.location.href = link;
    });
    card_details.appendChild(create_img('logo', logo_src));
    card.appendChild(card_header);
    card.appendChild(card_details);
    return card;
}


window.addEventListener('load', () => {
    var index = window.location.hash.slice(1) || "0";
    click_func(index);
});

window.addEventListener('locationchange', () => {
    var index = window.location.hash.slice(1) || "0";
    click_func(index);
});

window.addEventListener('hashchange', () => {
    var index = window.location.hash.slice(1) || "0";
    click_func(index);
});


var click_func = (index) => {
    clear_func();
    var c = document.getElementsByClassName('container')[0];
    if( index === '1' ){
        /* Skills Page */
        c.appendChild( create_div('empty') );
        c.appendChild( create_title('Skills') );
        c.appendChild( create_hr('solid') );
        var div = create_div('skill-set');
        var subdiv = create_div('skill_desc');
        var ul = document.createElement('ul');

        /* Here list elements */
        var li = new Array(7);
        li[0] = document.createElement('li');
        li[0].appendChild( create_p('C/C++') );
        li[1] = document.createElement('li');
        li[1].appendChild( create_p('Python') );
        li[2] = document.createElement('li');
        li[2].appendChild( create_p('HTML, CSS, Javascript') );
        li[3] = document.createElement('li');
        li[3].appendChild( create_p('React Hooks') );
        li[4] = document.createElement('li');
        li[4].appendChild( create_p('PHP, Node.js, Java') );
        li[5] = document.createElement('li');
        li[5].appendChild( create_p('SQL, MongoDB'));
        li[6] = document.createElement('li');
        li[6].appendChild( create_p('Latex'));
        
        for(let i = 0;i < li.length;i++){
            ul.appendChild( li[i] );
        }

        /* ul2 */
        var ul2 = document.createElement('ul');
        var li2 = new Array(6); // how many elements
        li2[0] = document.createElement('li');
        li2[0].appendChild( create_p('Familiar to Intel x86/64 assembly code') );
        li2[1] = document.createElement('li');
        li2[1].appendChild( create_p('Familiar to use decompiler/analysis binary tools') );
        var subul = document.createElement('ul');
        var subli1 = document.createElement('li');
        var subli2 = document.createElement('li');
        var subli3 = document.createElement('li');
        var subli4 = document.createElement('li');

        subli1.appendChild( create_p('IDA pro') );
        subli2.appendChild( create_p('x86dbg, x64dbg'))
        subli3.appendChild( create_p('Process Hacker') );
        subli4.appendChild( create_p('Wireshark') );

        subul.appendChild(subli1);
        subul.appendChild(subli2);
        subul.appendChild(subli3);
        subul.appendChild(subli4);
        li2[1].appendChild(subul);

        li2[2] = document.createElement('li');
        li2[2].appendChild( create_p('Familiar to binary exploitation') );
        var subul2 = document.createElement('ul');
        var subli = new Array(3);
        for(let i = 0;i < 3;i++) 
            subli[i] = document.createElement('li');
        subli[0].appendChild( create_p('Stack overflow') );
        subli[1].appendChild( create_p('Heap exploit') );
        subli[2].appendChild( create_p('Return Oriented Programming (ROP)') );
        for(let i = 0;i < 3;i++)
            subul2.appendChild( subli[i] );
        li2[2].appendChild( subul2 );

        li2[3] = document.createElement('li');
        li2[3].appendChild( create_p('Familiar to web exploitation') );
        var subul3 = document.createElement('ul');
        var subli3 = document.createElement('li');
        subli3.appendChild( create_p('OWASP Top Ten 10 Web Application Security Risks') );
        subul3.appendChild( subli3 );
        li2[3].appendChild( subul3 );

        li2[4] = document.createElement('li');
        li2[4].appendChild( create_p('Familiar to write exploit script') );
        var subul4 = document.createElement('ul');
        // Python -- Pwntools, Netcat, Python/PHP/Node.js -- Requests, Shell Scripts
        var subli4 = new Array(4);
        for(let i = 0;i < 4;i++)
            subli4[i] = document.createElement('li');
        subli4[0].appendChild( create_p('Python -- Pwntools') );
        subli4[1].appendChild( create_p('Netcat') );
        subli4[2].appendChild( create_p('Python/PHP/Node.js -- Requests') );
        subli4[3].appendChild( create_p('Shell Scripts') );
        for(let i = 0;i < 4;i++)
            subul4.appendChild( subli4[i] );
        li2[4].appendChild( subul4 );

        li2[5] = document.createElement('li');
        li2[5].appendChild( create_p('Familiar to penestrating tools') );
        var subul5 = document.createElement('ul');
        // Nmap, DirBuster, Hashcat
        var subli5 = new Array(3);
        for(let i = 0;i < 3;i++)
            subli5[i] = document.createElement('li');
        subli5[0].appendChild( create_p('Nmap') );
        subli5[1].appendChild( create_p('DirBuster') );
        subli5[2].appendChild( create_p('Hashcat') );
        for(let i = 0;i < 3;i++)
            subul5.appendChild( subli5[i] );
        li2[5].appendChild( subul5 );

        li2[6] = document.createElement('li');
        li2[6].appendChild( create_p('Learned cryptography and realise theorem and manipulation'));
        

        /* put all things together */
        for(let i = 0;i < li2.length;i++)
            ul2.appendChild( li2[i] );
        
        /* ul3 */
        var ul3 = document.createElement('ul');
        var li3 = new Array(6); // how many elements
        for(let i = 0;i < li3.length; i++)
            li3[i] = document.createElement('li');
        li3[0].appendChild( create_p('Docker') );
        li3[1].appendChild( create_p('Apache/Nginx') );
        li3[2].appendChild( create_p('Cisco Packet Tracer') );
        li3[3].appendChild( create_p('Git') );
        li3[4].appendChild( create_p('Shell (Linux, Windows)') );
        li3[5].appendChild( create_p('Virtual Machines') );
        var subli3ul = document.createElement('ul');
        var subliul = new Array(3);
        for(let i = 0;i < subliul.length;i++)
            subliul[i] = document.createElement('li');
        subliul[0].appendChild( create_p('VirtualBox') );
        subliul[1].appendChild( create_p('VMware') );
        subliul[2].appendChild( create_p('Libvirt') );
        for(let i = 0;i < subliul.length;i++)
            subli3ul.appendChild(subliul[i]);
        li3[5].appendChild(subli3ul);
        for(let i = 0;i < li3.length;i++)
            ul3.appendChild( li3[i] );
        
        /* ul4 */
        var ul4 = document.createElement('ul');
        var li4 = new Array(4); // how many elements
        for( let i = 0;i < li4.length; ++i)
            li4[i] = document.createElement('li');
        li4[0].appendChild( create_p('Familiar to Data Structure and Algorithms Design') );
        li4[1].appendChild( create_p('Knows Object Oriented Programming (OOP) theorem') );
        li4[2].appendChild( create_p('Used to debug program, ensure the correctness of program') );
        li4[3].appendChild( create_p('Love to programming ❤️') );
        for(let i = 0;i < li4.length; i++)
            ul4.appendChild( li4[i] );

        subdiv.appendChild( create_subtitle('Programming Languages') );
        subdiv.appendChild(ul);
        subdiv.appendChild( create_subtitle('Security'));
        subdiv.appendChild(ul2);
        subdiv.appendChild( create_subtitle('DevOps'));
        subdiv.appendChild(ul3);
        subdiv.appendChild( create_subtitle('Programming Abilities'));
        subdiv.appendChild(ul4);

        div.appendChild(subdiv);
        c.appendChild(div);
    }
    else if( index === '2' ){
        /* Project Page */
        var project_set = create_div('project-set');
        
        /* Card list */
        project_set.appendChild( create_card('Hitcon 2022', 'My first online CTF!', 'https://github.com/warronyiang15/Computer-Security/tree/main/Hitcon2022', 'assets/github_logo.png') );
        project_set.appendChild( create_card('AIS3 EOF CTF 2022 qual', 'Final exam of Computer Security', 'https://github.com/warronyiang15/Computer-Security/tree/main/AIS-EOF2022_qual', 'assets/github_logo.png'));
        project_set.appendChild( create_card('AIS3 EOF CTF 2022 finals', 'My first offline CTF and first time to play A&D and KoH 😯', 'https://github.com/warronyiang15/Computer-Security/tree/main/AIS-EOF2022_finals', 'assets/github_logo.png'));
        project_set.appendChild( create_card('Web programming Spring 2022 Final Project', 'The final project about online board games', 'https://github.com/warronyiang15/wpfinalapp', 'assets/github_logo.png'));
        project_set.appendChild( create_card('TCG Fall 2022 Final Project', 'The final project about TCG einstein würfelt nicht AI', 'https://github.com/warronyiang15/TCG_AI_Final', 'assets/github_logo.png'));
        

        c.appendChild( create_div('empty') );
        c.appendChild( create_title('Project/Blog') );
        c.appendChild( create_hr('solid') );
        c.appendChild( project_set);
    }
    else if( index === '3' ){
        /* Competition Page */
        var competition_set = create_div('competition-set');
        var card = new Array(2);
        for(let i = 0;i < card.length;i++){
            card[i] = create_div('card');
        }
        card[0].appendChild( create_h1('第四十三年系上新生ICPC程式競賽'));
        card[0].appendChild( create_h3('2020, National Taiwan University') );
        card[0].appendChild( create_hr('solid-full') );
        card[0].appendChild( create_special_p('Freshman Competitive Programming in CSIE Department'));

        card[1].appendChild( create_h1('111年度AIS3 EOF進階資安攻防演練競賽'));
        card[1].appendChild( create_h3('2023, National Taiwan University') );
        card[1].appendChild( create_hr('solid-full'));
        card[1].appendChild( create_special_p('Attack and Defense + King of the hill mode Capture The Flag! My first participation of offline competition, checkout Projects/Blog section for details!') );

        for(let i = 0;i < card.length;i++){
            competition_set.appendChild( card[i] );
        }
        
        c.appendChild( create_div('empty') );
        c.appendChild( create_title('Competitions') );
        c.appendChild( create_hr('solid') );
        c.appendChild( competition_set );
    }
    else{
        /* Profile Page */
        /* Redirect invalid index to Profile Page */
        var profile_desc = create_div('profile_description');
        profile_desc.appendChild( create_p('I am a student who is deeply passionate about the field of Computer Science and Information Engineering, with a particular interest in achieving success through program development.'));
        profile_desc.appendChild( create_p('My experience includes developing system programming on Linux and working on the back-end of web applications.'));
        profile_desc.appendChild( create_p('I am enthusiastic about cybersecurity and have actively participated in online and offline cybersecurity competitions.'));
        profile_desc.appendChild( create_p('I am currently working on improving my network and system administration skills.'));
        var profile_logo = create_div('profile_logo');
        const icon = new Array(4);

        icon[0] = create_a('https://www.facebook.com/yiang.warron');
        icon[0].appendChild( create_img('logo', 'assets/facebook_logo.png') );
        icon[1] = create_a('https://www.instagram.com/gamer_yiang/');
        icon[1].appendChild( create_img('logo', 'assets/instagram_logo.png') );
        icon[2] = create_a('https://github.com/warronyiang15');
        icon[2].appendChild( create_img('logo', 'assets/github_logo.png') );
        icon[3] = create_a('https://www.linkedin.com/in/warron-yiang-wai-loon-267b49218/');
        icon[3].appendChild( create_img('logo', 'assets/linkedin_logo.png') );
        
        for(let i = 0;i < icon.length; ++i )
            profile_logo.appendChild( icon[i] );

        c.appendChild( create_div('empty') );
        c.appendChild( create_title('Profile Page') );
        c.appendChild( create_hr('solid') );
        c.appendChild( create_div('profile_picture') );
        c.appendChild( create_div('empty') );
        c.appendChild( profile_desc );
        c.appendChild( create_div('empty') );
        c.appendChild( profile_logo );
    }
}