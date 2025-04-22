// ملف JavaScript الرئيسي للموقع

// دالة لتحميل محتوى السيرة الذاتية العربية
function loadArabicContent() {
    // التحقق من أننا في صفحة السيرة الذاتية العربية
    if (document.querySelector('.arabic-resume')) {
        // معلومات الملف الشخصي
        document.getElementById('name').textContent = arabicContent.name;
        document.getElementById('email').textContent = arabicContent.contact.email;
        document.getElementById('phone').textContent = arabicContent.contact.phone;
        document.getElementById('address').textContent = arabicContent.contact.address;
        
        // الملخص المهني
        document.getElementById('professional-summary').textContent = arabicContent.summary;
        
        // الخبرات المهنية
        const experienceContainer = document.getElementById('experience-content');
        arabicContent.experience.forEach(exp => {
            const expItem = document.createElement('div');
            expItem.className = 'experience-item';
            
            const title = document.createElement('h3');
            title.textContent = exp.title;
            
            const company = document.createElement('h4');
            company.textContent = exp.company;
            
            const period = document.createElement('p');
            period.className = 'period';
            period.textContent = exp.period;
            
            const responsibilities = document.createElement('ul');
            responsibilities.className = 'responsibilities';
            
            exp.responsibilities.forEach(resp => {
                const li = document.createElement('li');
                li.textContent = resp;
                responsibilities.appendChild(li);
            });
            
            expItem.appendChild(title);
            expItem.appendChild(company);
            expItem.appendChild(period);
            expItem.appendChild(responsibilities);
            
            experienceContainer.appendChild(expItem);
        });
        
        // التعليم
        document.getElementById('education-degree').textContent = arabicContent.education.degree;
        document.getElementById('education-institution').textContent = arabicContent.education.institution;
        document.getElementById('education-period').textContent = arabicContent.education.period;
        
        // الدورات التدريبية
        loadTrainingItems('management-training', arabicContent.training.management);
        loadTrainingItems('quality-training', arabicContent.training.quality);
        loadTrainingItems('technical-training', arabicContent.training.technical);
        loadTrainingItems('professional-training', arabicContent.training.professional);
        loadTrainingItems('language-training', arabicContent.training.languages);
        
        // شهادات التقدير
        const certificatesList = document.getElementById('certificates-list');
        arabicContent.certificates.forEach(cert => {
            const li = document.createElement('li');
            li.textContent = `${cert.title} | ${cert.year}`;
            certificatesList.appendChild(li);
        });
        
        // المهارات
        loadSkills('professional-skills', arabicContent.skills.professional);
        loadSkills('personal-skills', arabicContent.skills.personal);
        loadSkills('technical-skills', arabicContent.skills.technical);
        
        // اللغات
        const languagesList = document.getElementById('languages-list');
        arabicContent.languages.forEach(lang => {
            const li = document.createElement('li');
            li.textContent = `${lang.name} (${lang.level})`;
            languagesList.appendChild(li);
        });
    }
}

// دالة لتحميل محتوى السيرة الذاتية الإنجليزية
function loadEnglishContent() {
    // التحقق من أننا في صفحة السيرة الذاتية الإنجليزية
    if (document.querySelector('.english-resume')) {
        // معلومات الملف الشخصي
        document.getElementById('name-en').textContent = englishContent.name;
        document.getElementById('email-en').textContent = englishContent.contact.email;
        document.getElementById('phone-en').textContent = englishContent.contact.phone;
        document.getElementById('address-en').textContent = englishContent.contact.address;
        
        // الملخص المهني
        document.getElementById('professional-summary-en').textContent = englishContent.summary;
        
        // الخبرات المهنية
        const experienceContainer = document.getElementById('experience-content-en');
        englishContent.experience.forEach(exp => {
            const expItem = document.createElement('div');
            expItem.className = 'experience-item';
            
            const title = document.createElement('h3');
            title.textContent = exp.title;
            
            const company = document.createElement('h4');
            company.textContent = exp.company;
            
            const period = document.createElement('p');
            period.className = 'period';
            period.textContent = exp.period;
            
            const responsibilities = document.createElement('ul');
            responsibilities.className = 'responsibilities';
            
            exp.responsibilities.forEach(resp => {
                const li = document.createElement('li');
                li.textContent = resp;
                responsibilities.appendChild(li);
            });
            
            expItem.appendChild(title);
            expItem.appendChild(company);
            expItem.appendChild(period);
            expItem.appendChild(responsibilities);
            
            experienceContainer.appendChild(expItem);
        });
        
        // التعليم
        document.getElementById('education-degree-en').textContent = englishContent.education.degree;
        document.getElementById('education-institution-en').textContent = englishContent.education.institution;
        document.getElementById('education-period-en').textContent = englishContent.education.period;
        
        // الدورات التدريبية
        loadTrainingItems('management-training-en', englishContent.training.management);
        loadTrainingItems('quality-training-en', englishContent.training.quality);
        loadTrainingItems('technical-training-en', englishContent.training.technical);
        loadTrainingItems('professional-training-en', englishContent.training.professional);
        loadTrainingItems('language-training-en', englishContent.training.languages);
        
        // شهادات التقدير
        const certificatesList = document.getElementById('certificates-list-en');
        englishContent.certificates.forEach(cert => {
            const li = document.createElement('li');
            li.textContent = `${cert.title} | ${cert.year}`;
            certificatesList.appendChild(li);
        });
        
        // المهارات
        loadSkills('professional-skills-en', englishContent.skills.professional);
        loadSkills('personal-skills-en', englishContent.skills.personal);
        loadSkills('technical-skills-en', englishContent.skills.technical);
        
        // اللغات
        const languagesList = document.getElementById('languages-list-en');
        englishContent.languages.forEach(lang => {
            const li = document.createElement('li');
            li.textContent = `${lang.name} (${lang.level})`;
            languagesList.appendChild(li);
        });
    }
}

// دالة مساعدة لتحميل عناصر الدورات التدريبية
function loadTrainingItems(containerId, items) {
    const container = document.getElementById(containerId);
    if (container && items) {
        items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.title} | ${item.provider} | ${item.year}`;
            container.appendChild(li);
        });
    }
}

// دالة مساعدة لتحميل المهارات
function loadSkills(containerId, skills) {
    const container = document.getElementById(containerId);
    if (container && skills) {
        skills.forEach(skill => {
            const skillItem = document.createElement('span');
            skillItem.className = 'skill-item';
            skillItem.textContent = skill;
            container.appendChild(skillItem);
        });
    }
}

// دالة للعودة إلى أعلى الصفحة
function setupBackToTop() {
    const backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// تنفيذ الدوال عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    loadArabicContent();
    loadEnglishContent();
    setupBackToTop();
});
