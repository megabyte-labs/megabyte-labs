import { h, F as Fragment, r as registerInstance, k as Host } from './index-9fe124a3.js';
import { R as ResponsiveContainer, H as Heading, P as Paragraph, b as Button } from './index-257c74e4.js';

const SolutionUbuntu = () => {
  return (h(Fragment, null,
    h(ResponsiveContainer, { id: "what-is", as: "section" },
      h("div", { class: "ui-container" },
        h("ion-icon", { class: "what-is-info-icon", name: "information-circle-outline" }),
        h(Heading, { class: "quote-summary", level: 2 }, "What is Ubuntu and why should you provision it with Install Doctor?"),
        h(Paragraph, { class: "quote-summary" }, "Ubuntu is a popular Linux distribution that is based on Debian and is known for its ease of use, stability, and security. It is widely used by individuals, businesses, and organizations for a variety of purposes, including desktop computing, server hosting, and cloud infrastructure. Ubuntu has a large community of users and developers, who contribute to the development and maintenance of the software."),
        h(Paragraph, { class: "quote-summary" }, "If you are provisioning Ubuntu, you would want to do it properly with an installation framework like Install Doctor. This is because the installation process for any operating system can be time-consuming and complex, especially if you are provisioning multiple systems. An installation framework like Install Doctor can automate many of the tasks involved in installing and configuring the operating system, making the process faster and more efficient."),
        h(Paragraph, { class: "quote-summary" }, "Install Doctor is regularly tested on Ubuntu and many other operating systems, which means that it is designed to work seamlessly with the operating system. It also handles many of the Ubuntu specific issues that people face while provisioning Ubuntu, such as package dependencies and kernel modules. This means that you can be confident that the installation process will be smooth and reliable, without any compatibility issues or other problems."),
        h(Paragraph, { class: "quote-summary" }, "Furthermore, Install Doctor's default settings include a gorgeous theme that can make your Ubuntu installation look modern and attractive. This can be especially helpful if you are provisioning Ubuntu for a desktop or other user-facing environment, where aesthetics and user experience are important."),
        h(Paragraph, { class: "quote-summary" }, "In conclusion, Ubuntu is a popular and user-friendly Linux distribution that is used for a variety of purposes. If you are provisioning Ubuntu, you would want to do it properly with an installation framework like Install Doctor. Install Doctor is regularly tested on Ubuntu and handles many of the Ubuntu specific issues that people face while provisioning Ubuntu. Additionally, Install Doctor's default settings include a gorgeous theme that can make your Ubuntu installation look modern and attractive."))),
    h(ResponsiveContainer, { id: "getting-started", as: "section" },
      h("article", { class: "step" },
        h("sup", { class: "ui-heading-6" }, "01"),
        h("div", { class: "heading-group" },
          h(Heading, { level: 3, id: "install" }, "Provision Ubuntu."),
          h(Paragraph, null, "Interactively provision Ubuntu with a feature-packed terminal, slick theme, and a configurable list of software.")),
        h("div", { class: "code-panel" },
          h("code-snippet", { language: "shell-session", code: `
bash <(curl -sSL https://install.doctor/start)
` }))),
      h("article", { class: "step" },
        h("sup", { class: "ui-heading-6" }, "02"),
        h("div", { class: "heading-group" },
          h(Heading, { level: 3 }, "Launch web services."),
          h("div", { class: "platforms" },
            h("img", { loading: "lazy", src: "/assets/img/landing/docker-swarm.png", alt: "Docker Swarm", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/kubesphere.png", alt: "KubeSphere", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/tailscale.png", alt: "Tailscale", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/cloudflare.png", alt: "CloudFlare", class: "vm-icon", width: "37", height: "37" })),
          h(Paragraph, null, "Launch a suite of web services via Docker Swarm and KubeSphere. Access all your machines over a VPN subnet (via Tailscale) and host SSO-protected web apps (via CloudFlare Teams).")),
        h("div", { class: "code-panel" },
          h("code-snippet", { language: "shell-session", code: `
run setup:webapps
` }))),
      h("article", { class: "step" },
        h("sup", { class: "ui-heading-6" }, "03"),
        h("div", { class: "heading-group" },
          h(Heading, { level: 3 }, "Launch and provision VMs."),
          h("div", { class: "platforms" },
            h("img", { loading: "lazy", src: "/assets/img/landing/hyperv.png", alt: "Hyper-V", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/parallels.png", alt: "Parallels", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/qemu.png", alt: "QEMU", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/virtualbox.png", alt: "VirtualBox", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/vmware.png", alt: "VMWare", class: "vm-icon", width: "37", height: "37" })),
          h(Paragraph, null, "Create Archlinux, CentOS, Debian, Fedora, macOS, Ubuntu, and Windows VMs using almost any virtualization platform. Create disposable environments, improve security, and run macOS / Windows.")),
        h("div", { class: "code-panel" },
          h("code-snippet", { language: "shell-session", code: `
run setup:vms
` }))))));
};

const SolutionFedora = () => {
  return (h(Fragment, null,
    h(ResponsiveContainer, { id: "what-is", as: "section" },
      h("div", { class: "ui-container" },
        h("ion-icon", { class: "what-is-info-icon", name: "information-circle-outline" }),
        h(Heading, { class: "quote-summary", level: 2 }, "What is Fedora and why should you provision it with Install Doctor?"),
        h(Paragraph, { class: "quote-summary" }, "Fedora is a popular Linux distribution that is known for being a community-driven project and an upstream source of many features found in other Linux distributions. It is maintained by the Fedora Project, which is sponsored by Red Hat. Fedora is often used by developers, system administrators, and enthusiasts who are interested in the latest technologies and software."),
        h(Paragraph, { class: "quote-summary" }, "One reason why you would want to provision Fedora properly with an installation framework like Install Doctor is that it can save you time and effort. The installation process for any operating system can be time-consuming and complicated, especially if you are installing it on multiple systems. An installation framework like Install Doctor can automate many of the tasks involved in installing and configuring the operating system, making the process faster and more efficient."),
        h(Paragraph, { class: "quote-summary" }, "Another reason to use Install Doctor to provision Fedora is that it can help ensure that the installation is consistent and reliable. When you manually install an operating system, there is a greater chance of human error, which can lead to inconsistencies and problems down the line. With an installation framework, you can ensure that each system is configured exactly the same way, reducing the likelihood of errors and making it easier to troubleshoot if problems do occur."),
        h(Paragraph, { class: "quote-summary" }, "In summary, Fedora is a popular Linux distribution that is used by developers, system administrators, and enthusiasts who are interested in the latest technologies and software. Provisioning it properly with an installation framework like Install Doctor can save time, increase efficiency, and ensure that installations are consistent and reliable."))),
    h(ResponsiveContainer, { id: "getting-started", as: "section" },
      h("article", { class: "step" },
        h("sup", { class: "ui-heading-6" }, "01"),
        h("div", { class: "heading-group" },
          h(Heading, { level: 3, id: "install" }, "Provision Fedora."),
          h(Paragraph, null, "Interactively provision Fedora with a feature-packed terminal, slick theme, and a configurable list of software.")),
        h("div", { class: "code-panel" },
          h("code-snippet", { language: "shell-session", code: `
bash <(curl -sSL https://install.doctor/start)
` }))),
      h("article", { class: "step" },
        h("sup", { class: "ui-heading-6" }, "02"),
        h("div", { class: "heading-group" },
          h(Heading, { level: 3 }, "Launch web services."),
          h("div", { class: "platforms" },
            h("img", { loading: "lazy", src: "/assets/img/landing/docker-swarm.png", alt: "Docker Swarm", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/kubesphere.png", alt: "KubeSphere", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/tailscale.png", alt: "Tailscale", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/cloudflare.png", alt: "CloudFlare", class: "vm-icon", width: "37", height: "37" })),
          h(Paragraph, null, "Launch a suite of web services via Docker Swarm and KubeSphere. Access all your machines over a VPN subnet (via Tailscale) and host SSO-protected web apps (via CloudFlare Teams).")),
        h("div", { class: "code-panel" },
          h("code-snippet", { language: "shell-session", code: `
run setup:webapps
` }))),
      h("article", { class: "step" },
        h("sup", { class: "ui-heading-6" }, "03"),
        h("div", { class: "heading-group" },
          h(Heading, { level: 3 }, "Launch and provision VMs."),
          h("div", { class: "platforms" },
            h("img", { loading: "lazy", src: "/assets/img/landing/hyperv.png", alt: "Hyper-V", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/parallels.png", alt: "Parallels", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/qemu.png", alt: "QEMU", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/virtualbox.png", alt: "VirtualBox", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/vmware.png", alt: "VMWare", class: "vm-icon", width: "37", height: "37" })),
          h(Paragraph, null, "Create Archlinux, CentOS, Debian, Fedora, macOS, Ubuntu, and Windows VMs using almost any virtualization platform. Create disposable environments, improve security, and run macOS / Windows.")),
        h("div", { class: "code-panel" },
          h("code-snippet", { language: "shell-session", code: `
run setup:vms
` }))))));
};

const SolutionCentOS = () => {
  return (h(Fragment, null,
    h(ResponsiveContainer, { id: "what-is", as: "section" },
      h("div", { class: "ui-container" },
        h("ion-icon", { class: "what-is-info-icon", name: "information-circle-outline" }),
        h(Heading, { class: "quote-summary", level: 2 }, "What is CentOS and why should you provision it with Install Doctor?"),
        h(Paragraph, { class: "quote-summary" }, "CentOS (Community Enterprise Operating System) is a popular Linux distribution that is based on the source code for Red Hat Enterprise Linux (RHEL). It is known for its stability, security, and long-term support, making it a popular choice for servers and other mission-critical applications. CentOS is maintained by the CentOS Project, which is a community-driven effort to develop and maintain the software."),
        h(Paragraph, { class: "quote-summary" }, "If you are provisioning CentOS, you would want to do it properly with an installation framework like Install Doctor. This is because the installation process for any operating system can be time-consuming and complex, especially if you are provisioning multiple systems. An installation framework like Install Doctor can automate many of the tasks involved in installing and configuring the operating system, making the process faster and more efficient."),
        h(Paragraph, { class: "quote-summary" }, "Furthermore, Install Doctor is regularly tested on CentOS, which means that it is designed to work seamlessly with the operating system. It also handles many of the CentOS specific issues that people face while provisioning CentOS, such as package dependencies and kernel modules. This means that you can be confident that the installation process will be smooth and reliable, without any compatibility issues or other problems."),
        h(Paragraph, { class: "quote-summary" }, "In summary, CentOS is a popular Linux distribution that is known for its stability, security, and long-term support. If you are provisioning CentOS, you would want to do it properly with an installation framework like Install Doctor. Install Doctor is regularly tested on CentOS and is designed to work seamlessly with the operating system. It can automate many of the tasks involved in installing and configuring the operating system, making the process faster and more efficient. Additionally, Install Doctor handles many of the CentOS specific issues that people face while provisioning CentOS, which makes it an ideal tool for provisioning CentOS systems."))),
    h(ResponsiveContainer, { id: "getting-started", as: "section" },
      h("article", { class: "step" },
        h("sup", { class: "ui-heading-6" }, "01"),
        h("div", { class: "heading-group" },
          h(Heading, { level: 3, id: "install" }, "Provision CentOS."),
          h(Paragraph, null, "Interactively provision CentOS with a feature-packed terminal, slick theme, and a configurable list of software.")),
        h("div", { class: "code-panel" },
          h("code-snippet", { language: "shell-session", code: `
bash <(curl -sSL https://install.doctor/start)
` }))),
      h("article", { class: "step" },
        h("sup", { class: "ui-heading-6" }, "02"),
        h("div", { class: "heading-group" },
          h(Heading, { level: 3 }, "Launch web services."),
          h("div", { class: "platforms" },
            h("img", { loading: "lazy", src: "/assets/img/landing/docker-swarm.png", alt: "Docker Swarm", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/kubesphere.png", alt: "KubeSphere", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/tailscale.png", alt: "Tailscale", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/cloudflare.png", alt: "CloudFlare", class: "vm-icon", width: "37", height: "37" })),
          h(Paragraph, null, "Launch a suite of web services via Docker Swarm and KubeSphere. Access all your machines over a VPN subnet (via Tailscale) and host SSO-protected web apps (via CloudFlare Teams).")),
        h("div", { class: "code-panel" },
          h("code-snippet", { language: "shell-session", code: `
run setup:webapps
` }))),
      h("article", { class: "step" },
        h("sup", { class: "ui-heading-6" }, "03"),
        h("div", { class: "heading-group" },
          h(Heading, { level: 3 }, "Launch and provision VMs."),
          h("div", { class: "platforms" },
            h("img", { loading: "lazy", src: "/assets/img/landing/hyperv.png", alt: "Hyper-V", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/parallels.png", alt: "Parallels", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/qemu.png", alt: "QEMU", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/virtualbox.png", alt: "VirtualBox", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/vmware.png", alt: "VMWare", class: "vm-icon", width: "37", height: "37" })),
          h(Paragraph, null, "Create Archlinux, CentOS, Debian, Fedora, macOS, Ubuntu, and Windows VMs using almost any virtualization platform. Create disposable environments, improve security, and run macOS / Windows.")),
        h("div", { class: "code-panel" },
          h("code-snippet", { language: "shell-session", code: `
run setup:vms
` }))))));
};

const SolutionDebian = () => {
  return (h(Fragment, null,
    h(ResponsiveContainer, { id: "what-is", as: "section" },
      h("div", { class: "ui-container" },
        h("ion-icon", { class: "what-is-info-icon", name: "information-circle-outline" }),
        h(Heading, { class: "quote-summary", level: 2 }, "What is Debian and why should you provision it with Install Doctor?"),
        h(Paragraph, { class: "quote-summary" }, "Debian is a widely used Linux distribution that is known for its stability, security, and open-source nature. It is maintained by the Debian Project, which is a community of volunteers who work together to develop and maintain the software. Debian is popular among both users and developers due to its vast repository of free, open-source software packages and its commitment to the principles of free software."),
        h(Paragraph, { class: "quote-summary" }, "One reason why you would want to provision Debian properly with an installation framework like Install Doctor is that it can save you time and effort. The installation process for any operating system can be time-consuming and complicated, especially if you are installing it on multiple systems. An installation framework like Install Doctor can automate many of the tasks involved in installing and configuring the operating system, making the process faster and more efficient."),
        h(Paragraph, { class: "quote-summary" }, "Another reason to use Install Doctor to provision Debian is that it has been heavily tested on Debian and is designed to work seamlessly with the operating system. This means that you can be confident that the installation process will be smooth and reliable, without any compatibility issues or other problems. Additionally, Install Doctor supports the installation of thousands of free, open-source software packages, which makes it easier to get up and running with the software you need."),
        h(Paragraph, { class: "quote-summary" }, "In summary, Debian is a popular and well-respected Linux distribution that is known for its stability, security, and vast repository of free, open-source software packages. Provisioning it properly with an installation framework like Install Doctor can save time, increase efficiency, and ensure that installations are consistent and reliable. Furthermore, Install Doctor has been extensively tested on Debian and supports the installation of thousands of free, open-source software packages, making it an ideal tool for provisioning Debian systems."))),
    h(ResponsiveContainer, { id: "getting-started", as: "section" },
      h("article", { class: "step" },
        h("sup", { class: "ui-heading-6" }, "01"),
        h("div", { class: "heading-group" },
          h(Heading, { level: 3, id: "install" }, "Provision Debian."),
          h(Paragraph, null, "Interactively provision Debian with a feature-packed terminal, slick theme, and a configurable list of software.")),
        h("div", { class: "code-panel" },
          h("code-snippet", { language: "shell-session", code: `
bash <(curl -sSL https://install.doctor/start)
` }))),
      h("article", { class: "step" },
        h("sup", { class: "ui-heading-6" }, "02"),
        h("div", { class: "heading-group" },
          h(Heading, { level: 3 }, "Launch web services."),
          h("div", { class: "platforms" },
            h("img", { loading: "lazy", src: "/assets/img/landing/docker-swarm.png", alt: "Docker Swarm", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/kubesphere.png", alt: "KubeSphere", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/tailscale.png", alt: "Tailscale", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/cloudflare.png", alt: "CloudFlare", class: "vm-icon", width: "37", height: "37" })),
          h(Paragraph, null, "Launch a suite of web services via Docker Swarm and KubeSphere. Access all your machines over a VPN subnet (via Tailscale) and host SSO-protected web apps (via CloudFlare Teams).")),
        h("div", { class: "code-panel" },
          h("code-snippet", { language: "shell-session", code: `
run setup:webapps
` }))),
      h("article", { class: "step" },
        h("sup", { class: "ui-heading-6" }, "03"),
        h("div", { class: "heading-group" },
          h(Heading, { level: 3 }, "Launch and provision VMs."),
          h("div", { class: "platforms" },
            h("img", { loading: "lazy", src: "/assets/img/landing/hyperv.png", alt: "Hyper-V", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/parallels.png", alt: "Parallels", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/qemu.png", alt: "QEMU", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/virtualbox.png", alt: "VirtualBox", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/vmware.png", alt: "VMWare", class: "vm-icon", width: "37", height: "37" })),
          h(Paragraph, null, "Create Archlinux, CentOS, Debian, Fedora, macOS, Ubuntu, and Windows VMs using almost any virtualization platform. Create disposable environments, improve security, and run macOS / Windows.")),
        h("div", { class: "code-panel" },
          h("code-snippet", { language: "shell-session", code: `
run setup:vms
` }))))));
};

const SolutionMacOS = () => {
  return (h(Fragment, null,
    h(ResponsiveContainer, { id: "what-is", as: "section" },
      h("div", { class: "ui-container" },
        h("ion-icon", { class: "what-is-info-icon", name: "information-circle-outline" }),
        h(Heading, { class: "quote-summary", level: 2 }, "What is macOS and why should you provision it with Install Doctor?"),
        h(Paragraph, { class: "quote-summary" }, "If you need to provision macOS, using an installation framework like Install Doctor can make the process faster, easier, and more reliable. Here are some of the main reasons why you would want to use Install Doctor to provision macOS:"),
        h("ul", { class: "quote-summary quote-summary-list" },
          h("li", null,
            h("b", null, "Optimized configurations for thousands of programs"),
            ": Install Doctor comes with preconfigured settings for thousands of popular programs, which can help to ensure that your applications run optimally on your macOS system."),
          h("li", null,
            h("b", null, "Advanced terminal settings"),
            ": Install Doctor includes terminal settings that use the best open-source projects available, providing a powerful and flexible command-line environment that you can customize to suit your needs. With these settings, you can take advantage of features and capabilities that you may not have even known were possible."),
          h("li", null,
            h("b", null, "Automatic macOS-specific optimizations"),
            ": Install Doctor handles macOS-specific optimizations automatically, ensuring that your system is configured to run smoothly and efficiently. This includes things like optimizing your system preferences, adjusting kernel settings, and more."),
          h("li", null,
            h("b", null, "Time-saving automation"),
            ": With Install Doctor, you can automate many of the tasks involved in provisioning macOS, which can save you time and effort. This includes tasks like installing software, configuring settings, and setting up user accounts."),
          h("li", null,
            h("b", null, "Improved security"),
            ": By using Install Doctor to provision macOS, you can ensure that your system is configured securely from the outset. Install Doctor includes security-focused settings and configurations that can help to protect your system from common threats and vulnerabilities.")),
        h(Paragraph, { class: "quote-summary" }, "Overall, if you need to provision macOS systems, using an installation framework like Install Doctor can make the process faster, easier, and more reliable. With optimized configurations for thousands of programs, advanced terminal settings, and automatic macOS-specific optimizations, Install Doctor can help you to configure your system to run optimally and securely. Additionally, the time-saving automation features can help to streamline the provisioning process, freeing up your time for other tasks."))),
    h(ResponsiveContainer, { id: "getting-started", as: "section" },
      h("article", { class: "step" },
        h("sup", { class: "ui-heading-6" }, "01"),
        h("div", { class: "heading-group" },
          h(Heading, { level: 3, id: "install" }, "Provision macOS."),
          h(Paragraph, null, "Interactively provision macOS with a feature-packed terminal, slick theme, and a configurable list of software.")),
        h("div", { class: "code-panel" },
          h("code-snippet", { language: "shell-session", code: `
bash <(curl -sSL https://install.doctor/start)
` }))),
      h("article", { class: "step" },
        h("sup", { class: "ui-heading-6" }, "02"),
        h("div", { class: "heading-group" },
          h(Heading, { level: 3 }, "Launch web services."),
          h("div", { class: "platforms" },
            h("img", { loading: "lazy", src: "/assets/img/landing/docker-swarm.png", alt: "Docker Swarm", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/kubesphere.png", alt: "KubeSphere", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/tailscale.png", alt: "Tailscale", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/cloudflare.png", alt: "CloudFlare", class: "vm-icon", width: "37", height: "37" })),
          h(Paragraph, null, "Launch a suite of web services via Docker Swarm and KubeSphere. Access all your machines over a VPN subnet (via Tailscale) and host SSO-protected web apps (via CloudFlare Teams).")),
        h("div", { class: "code-panel" },
          h("code-snippet", { language: "shell-session", code: `
run setup:webapps
` }))),
      h("article", { class: "step" },
        h("sup", { class: "ui-heading-6" }, "03"),
        h("div", { class: "heading-group" },
          h(Heading, { level: 3 }, "Launch and provision VMs."),
          h("div", { class: "platforms" },
            h("img", { loading: "lazy", src: "/assets/img/landing/hyperv.png", alt: "Hyper-V", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/parallels.png", alt: "Parallels", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/qemu.png", alt: "QEMU", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/virtualbox.png", alt: "VirtualBox", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/vmware.png", alt: "VMWare", class: "vm-icon", width: "37", height: "37" })),
          h(Paragraph, null, "Create Archlinux, CentOS, Debian, Fedora, macOS, Ubuntu, and Windows VMs using almost any virtualization platform. Create disposable environments, improve security, and run macOS / Windows.")),
        h("div", { class: "code-panel" },
          h("code-snippet", { language: "shell-session", code: `
run setup:vms
` }))))));
};

const SolutionArchlinux = () => {
  return (h(Fragment, null,
    h(ResponsiveContainer, { id: "what-is", as: "section" },
      h("div", { class: "ui-container" },
        h("ion-icon", { class: "what-is-info-icon", name: "information-circle-outline" }),
        h(Heading, { class: "quote-summary", level: 2 }, "What is Archlinux and why should you provision it with Install Doctor?"),
        h(Paragraph, { class: "quote-summary" }, "Arch Linux is a lightweight and flexible Linux distribution that is known for its simplicity, elegance, and user-friendliness. It is designed to be fast, stable, and customizable, making it an ideal choice for users who want a minimalist and customizable Linux distribution. Arch Linux is a rolling-release distribution, which means that it is constantly updated with the latest software packages."),
        h(Paragraph, { class: "quote-summary" }, "If you are provisioning Arch Linux, you would want to do it properly with an installation framework like Install Doctor. This is because the installation process for any operating system can be time-consuming and complex, especially if you are provisioning multiple systems. An installation framework like Install Doctor can automate many of the tasks involved in installing and configuring the operating system, making the process faster and more efficient."),
        h(Paragraph, { class: "quote-summary" }, "Install Doctor is regularly tested on Arch Linux, which means that it is designed to work seamlessly with the operating system. It also handles many of the Arch Linux specific issues that people face while provisioning Arch Linux, such as package dependencies and kernel modules. This means that you can be confident that the installation process will be smooth and reliable, without any compatibility issues or other problems."),
        h(Paragraph, { class: "quote-summary" }, "Moreover, with Install Doctor, you can keep your configurations in YAML format saved to a git repository. This allows you to version control your configurations and easily track changes over time. It also makes it easier to share configurations between systems or with other users. This feature can save you time and effort by making it easier to maintain and manage your Arch Linux installations."),
        h(Paragraph, { class: "quote-summary" }, "In conclusion, Arch Linux is a lightweight and customizable Linux distribution that is known for its simplicity and elegance. If you are provisioning Arch Linux, you would want to do it properly with an installation framework like Install Doctor. Install Doctor is regularly tested on Arch Linux and handles many of the Arch Linux specific issues that people face while provisioning Arch Linux. Additionally, with Install Doctor, you can keep your configurations in YAML format saved to a git repository, which makes it easier to maintain and manage your installations."))),
    h(ResponsiveContainer, { id: "getting-started", as: "section" },
      h("article", { class: "step" },
        h("sup", { class: "ui-heading-6" }, "01"),
        h("div", { class: "heading-group" },
          h(Heading, { level: 3, id: "install" }, "Provision Archlinux."),
          h(Paragraph, null, "Interactively provision Archlinux with a feature-packed terminal, slick theme, and a configurable list of software.")),
        h("div", { class: "code-panel" },
          h("code-snippet", { language: "shell-session", code: `
bash <(curl -sSL https://install.doctor/start)
` }))),
      h("article", { class: "step" },
        h("sup", { class: "ui-heading-6" }, "02"),
        h("div", { class: "heading-group" },
          h(Heading, { level: 3 }, "Launch web services."),
          h("div", { class: "platforms" },
            h("img", { loading: "lazy", src: "/assets/img/landing/docker-swarm.png", alt: "Docker Swarm", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/kubesphere.png", alt: "KubeSphere", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/tailscale.png", alt: "Tailscale", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/cloudflare.png", alt: "CloudFlare", class: "vm-icon", width: "37", height: "37" })),
          h(Paragraph, null, "Launch a suite of web services via Docker Swarm and KubeSphere. Access all your machines over a VPN subnet (via Tailscale) and host SSO-protected web apps (via CloudFlare Teams).")),
        h("div", { class: "code-panel" },
          h("code-snippet", { language: "shell-session", code: `
run setup:webapps
` }))),
      h("article", { class: "step" },
        h("sup", { class: "ui-heading-6" }, "03"),
        h("div", { class: "heading-group" },
          h(Heading, { level: 3 }, "Launch and provision VMs."),
          h("div", { class: "platforms" },
            h("img", { loading: "lazy", src: "/assets/img/landing/hyperv.png", alt: "Hyper-V", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/parallels.png", alt: "Parallels", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/qemu.png", alt: "QEMU", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/virtualbox.png", alt: "VirtualBox", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/vmware.png", alt: "VMWare", class: "vm-icon", width: "37", height: "37" })),
          h(Paragraph, null, "Create Archlinux, CentOS, Debian, Fedora, macOS, Ubuntu, and Windows VMs using almost any virtualization platform. Create disposable environments, improve security, and run macOS / Windows.")),
        h("div", { class: "code-panel" },
          h("code-snippet", { language: "shell-session", code: `
run setup:vms
` }))))));
};

const SolutionQubes = () => {
  return (h(Fragment, null,
    h(ResponsiveContainer, { id: "what-is", as: "section" },
      h("div", { class: "ui-container" },
        h("ion-icon", { class: "what-is-info-icon", name: "information-circle-outline" }),
        h(Heading, { class: "quote-summary", level: 2 }, "What is Qubes OS?"),
        h(Paragraph, { class: "quote-summary" }, "Qubes OS is a security-focused, open-source operating system that is designed to provide better security and isolation for its users. Unlike traditional operating systems, Qubes OS uses a unique approach to security called \"Security by Compartmentalization.\""),
        h(Paragraph, { class: "quote-summary" }, "This approach involves separating different applications and tasks into isolated compartments, called \"qubes,\" which are each assigned a specific level of trust. For example, you can have a qube for your personal documents, a qube for browsing the web, and a qube for running sensitive applications. This way, if one qube is compromised, the others remain secure and unaffected."),
        h(Paragraph, { class: "quote-summary" }, "Qubes OS also provides other security features, such as strict isolation of networking and USB devices, enforced memory management, and compartmentalized cryptography. It is designed to be used on a variety of hardware, including laptops and desktops, and supports a range of applications, including web browsing, email, office productivity, and multimedia."),
        h(Paragraph, { class: "quote-summary" }, "Qubes OS is free and open-source, which means that anyone can access the source code and contribute to its development. It is often used by journalists, activists, and security professionals who require a high level of security and privacy in their work."))),
    h(ResponsiveContainer, { id: "getting-started", as: "section" },
      h("article", { class: "step" },
        h("sup", { class: "ui-heading-6" }, "01"),
        h("div", { class: "heading-group" },
          h(Heading, { level: 3, id: "install" }, "Provision Qubes."),
          h(Paragraph, null, "Interactively provision Qubes with feature-packed terminals, a slick theme, and a configurable lists of software for each Qubes VM. This one-liner will start the provisioning process when run from Qubes dom0.")),
        h("div", { class: "code-panel" },
          h("code-snippet", { language: "shell-session", code: `
qvm-run --pass-io sys-firewall "curl -sSL https://install.doctor/qubes" > ~/setup.sh && bash ~/setup.sh
` }))),
      h("article", { class: "step" },
        h("sup", { class: "ui-heading-6" }, "02"),
        h("div", { class: "heading-group" },
          h(Heading, { level: 3 }, "Launch web services."),
          h("div", { class: "platforms" },
            h("img", { loading: "lazy", src: "/assets/img/landing/docker-swarm.png", alt: "Docker Swarm", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/kubesphere.png", alt: "KubeSphere", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/tailscale.png", alt: "Tailscale", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/cloudflare.png", alt: "CloudFlare", class: "vm-icon", width: "37", height: "37" })),
          h(Paragraph, null, "Launch a suite of web services via Docker Swarm and KubeSphere to a network-enabled VM. Access all your machines over a VPN subnet (via Tailscale) and host SSO-protected web apps (via CloudFlare Teams).")),
        h("div", { class: "code-panel" },
          h("code-snippet", { language: "shell-session", code: `
run setup:webapps
` }))))));
};

const SolutionWindows = () => {
  return (h(Fragment, null,
    h(ResponsiveContainer, { id: "what-is", as: "section" },
      h("div", { class: "ui-container" },
        h("ion-icon", { class: "what-is-info-icon", name: "information-circle-outline" }),
        h(Heading, { class: "quote-summary", level: 2 }, "Why should you provision Windows with Install Doctor?"),
        h(Paragraph, { class: "quote-summary" }, "Provisioning Windows can be a time-consuming and complex process, especially when you need to set up multiple systems with specific configurations and software requirements. This is where an installation framework like Install Doctor can be extremely useful. Install Doctor is a powerful and user-friendly installation framework that automates many of the tasks involved in installing and configuring Windows."),
        h(Paragraph, { class: "quote-summary" }, "One of the key benefits of using Install Doctor to provision Windows is that it handles updates automatically. This means that you don't have to manually search for and download updates, which can be time-consuming and tedious. Install Doctor ensures that your Windows installation is always up-to-date and secure."),
        h(Paragraph, { class: "quote-summary" }, "Another benefit of using Install Doctor to provision Windows is that it can install software that requires rebooting, such as Docker, without any manual intervention. This can save you time and effort, especially if you are provisioning multiple systems."),
        h(Paragraph, { class: "quote-summary" }, "Additionally, Install Doctor comes with optimized configurations for thousands of programs. This means that when you install a particular program, Install Doctor automatically configures it to run optimally on your Windows system. This can help to ensure that your programs run smoothly and efficiently, which can be particularly important in resource-intensive environments like data centers or gaming setups."),
        h(Paragraph, { class: "quote-summary" }, "In conclusion, if you need to provision Windows systems, using an installation framework like Install Doctor can save you time and effort, while ensuring that your installations are up-to-date, secure, and optimized for your specific needs. With Install Doctor, you can handle updates automatically, install software that requires rebooting, and take advantage of optimized configurations for thousands of programs. These features make Install Doctor an excellent choice for anyone who needs to provision Windows systems efficiently and reliably."))),
    h(ResponsiveContainer, { id: "getting-started", as: "section" },
      h("article", { class: "step" },
        h("sup", { class: "ui-heading-6" }, "01"),
        h("div", { class: "heading-group" },
          h(Heading, { level: 3, id: "install" }, "Provision Windows."),
          h(Paragraph, null, "Interactively provision Windows with a feature-packed terminal, slick theme, and a configurable list of software.")),
        h("div", { class: "code-panel" },
          h("code-snippet", { language: "shell-session", code: `
iex ((New-Object System.Net.WebClient).DownloadString('https://install.doctor/windows'))
` }))),
      h("article", { class: "step" },
        h("sup", { class: "ui-heading-6" }, "02"),
        h("div", { class: "heading-group" },
          h(Heading, { level: 3 }, "Launch web services."),
          h("div", { class: "platforms" },
            h("img", { loading: "lazy", src: "/assets/img/landing/docker-swarm.png", alt: "Docker Swarm", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/kubesphere.png", alt: "KubeSphere", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/tailscale.png", alt: "Tailscale", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/cloudflare.png", alt: "CloudFlare", class: "vm-icon", width: "37", height: "37" })),
          h(Paragraph, null, "Launch a suite of web services via Docker Swarm and KubeSphere. Access all your machines over a VPN subnet (via Tailscale) and host SSO-protected web apps (via CloudFlare Teams).")),
        h("div", { class: "code-panel" },
          h("code-snippet", { language: "shell-session", code: `
run setup:webapps
` }))),
      h("article", { class: "step" },
        h("sup", { class: "ui-heading-6" }, "03"),
        h("div", { class: "heading-group" },
          h(Heading, { level: 3 }, "Launch and provision VMs."),
          h("div", { class: "platforms" },
            h("img", { loading: "lazy", src: "/assets/img/landing/hyperv.png", alt: "Hyper-V", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/parallels.png", alt: "Parallels", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/qemu.png", alt: "QEMU", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/virtualbox.png", alt: "VirtualBox", class: "vm-icon", width: "37", height: "37" }),
            h("img", { loading: "lazy", src: "/assets/img/landing/vmware.png", alt: "VMWare", class: "vm-icon", width: "37", height: "37" })),
          h(Paragraph, null, "Create Archlinux, CentOS, Debian, Fedora, macOS, Ubuntu, and Windows VMs using almost any virtualization platform. Create disposable environments, improve security, and run macOS / Windows.")),
        h("div", { class: "code-panel" },
          h("code-snippet", { language: "shell-session", code: `
run setup:vms
` }))))));
};

const solutionPageCss = ".sc-solution-page:root{--c-capacitor-blue:#119eff}.sc-solution-page-h{display:block;scroll-behavior:smooth}.vm-icon.sc-solution-page{margin-left:3px;margin-right:3px}.numbered-pic.sc-solution-page{max-width:100%}#top.sc-solution-page .heading-group.sc-solution-page{margin-block-start:clamp(16px, 10vh, 96px);margin-block-end:var(--space-11);margin-inline-start:auto;margin-inline-end:auto;display:flex;flex-direction:column;align-items:center;text-align:center}#top.sc-solution-page .heading-group.sc-solution-page img.sc-solution-page{max-width:301px;margin-block-end:var(--space-7);width:301px;height:167px}#getting-started.sc-solution-page .image-wrapper.sc-solution-page{max-width:320px;margin:0 auto}#getting-started.sc-solution-page .image-wrapper.sc-solution-page>img.sc-solution-page{max-width:100%}#getting-started.sc-solution-page .step.sc-solution-page{display:flex;padding-block-end:120px;position:relative;margin-block-start:-16px}#getting-started.sc-solution-page .step.sc-solution-page>*.sc-solution-page{margin-block-start:var(--space-3)}@media screen and (max-width: 767px){#getting-started.sc-solution-page .step.sc-solution-page{flex-direction:column;padding-block-end:var(--space-11)}}#getting-started.sc-solution-page .step.sc-solution-page:last-of-type{padding-block-end:0}#getting-started.sc-solution-page .step.sc-solution-page:last-of-type::before{display:none}#getting-started.sc-solution-page .step.sc-solution-page::before{content:\"\";z-index:0;position:absolute;top:24px;left:7px;bottom:0;width:1px;background:var(--c-carbon-10)}@media screen and (max-width: 767px){#getting-started.sc-solution-page .step.sc-solution-page::before{display:none}}#getting-started.sc-solution-page .step.sc-solution-page sup.sc-solution-page{display:flex;align-items:center;height:40px;width:40px;margin-block-end:0;background:white;position:relative;top:-11px}#getting-started.sc-solution-page .step.sc-solution-page .heading-group.sc-solution-page{max-width:500px;flex-grow:1}@media screen and (max-width: 767px){#getting-started.sc-solution-page .step.sc-solution-page .heading-group.sc-solution-page{margin-block-start:0}}#getting-started.sc-solution-page .step.sc-solution-page .heading-group.sc-solution-page .ui-heading.sc-solution-page{margin-block-end:var(--space-2)}#getting-started.sc-solution-page .step.sc-solution-page .heading-group.sc-solution-page>*.sc-solution-page{max-width:520px}#getting-started.sc-solution-page .step.sc-solution-page .heading-group.sc-solution-page .platforms.sc-solution-page{display:flex;margin-block-end:var(--space-3)}#getting-started.sc-solution-page .step.sc-solution-page .heading-group.sc-solution-page .platforms.sc-solution-page img.sc-solution-page+img.sc-solution-page{margin-inline-start:var(--space-3)}#getting-started.sc-solution-page .code-panel.sc-solution-page{flex-grow:9999;max-width:560px;min-width:400px;margin-inline-start:32px}@media screen and (max-width: 767px){#getting-started.sc-solution-page .code-panel.sc-solution-page{min-width:auto;margin-inline-start:0px}}#continue.sc-solution-page{margin-block-start:96px}#newsletter.sc-solution-page{margin-block-start:160px;margin-block-end:160px}.ui-fancy-underline.sc-solution-page{display:inline-block;position:relative}.ui-fancy-underline.sc-solution-page:before{z-index:-1;background:#bfe4ff;display:block;content:\"\";position:absolute;bottom:0;left:0;width:100%;height:50%}#continue.sc-solution-page{margin:0;background-color:var(--c-indigo-10);width:100%;margin-top:69px;padding-top:69px;padding-bottom:69px;margin-bottom:0}#continue.sc-solution-page>div.sc-solution-page{max-width:780px;margin:0 auto;text-align:center}#heading-demo.sc-solution-page{margin-top:69px;text-align:center}.ui-tabs.sc-solution-page .ui-tab.sc-solution-page{min-height:300px}.ui-tabs.sc-solution-page .ui-tab-bar.sc-solution-page{background:#2e3b4a;border-radius:8px 8px 0 0;display:flex;flex-direction:row;padding:16px;overflow-x:auto}.ui-tabs.sc-solution-page .ui-tab-bar__button.sc-solution-page{cursor:pointer;user-select:none;font-family:var(--f-family-display);font-size:13px;color:var(--c-indigo-30);padding:6px 14px;margin-right:10px}.ui-tabs.sc-solution-page .ui-tab-bar__button--selected.sc-solution-page{background:#617184;color:white;border-radius:6px}capacitor-hubspot-form.sc-solution-page{padding-bottom:69px}";

const SolutionPage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.Demo = () => {
      return (h("section", { id: "demo" }, h(ResponsiveContainer, null, h("div", { class: "heading-group" }, h(Heading, { id: "demo-heading", level: 2 }, this.defaults.solutionPage.enterpriseSupport.title), h(Paragraph, null, "Get it done the easy way by leveraging our team of ", h("b", null, this.framework.name, " experts"), "."), h(Paragraph, null, this.defaults.solutionPage.enterpriseSupport.paragraph1), h(Paragraph, null, this.defaults.solutionPage.enterpriseSupport.paragraph2), h(Paragraph, null, h("b", { class: "noshow-noscript" }, "Use the form below to send us a message or ask questions about how ", this.defaults.brandName, " can help you with your specific needs."), h("noscript", null, h("b", null, "Send an e-mail to ", h("a", { href: 'mailto:' + this.defaults.brandEmail }, this.defaults.brandEmail), " with details on how we can help and we will respond to you in a timely fashion.")))), h("capacitor-hubspot-form", { defaults: this.defaults, formId: this.defaults.hubspot.enterpriseContactForm.formId }))));
    };
    this.solutionId = undefined;
    this.defaults = undefined;
  }
  componentWillLoad() {
    this.framework = this.defaults.solutionPage.solutions.find(entry => entry.id === this.solutionId);
  }
  getComponent() {
    switch (this.solutionId) {
      case 'archlinux':
        return h(SolutionArchlinux, null);
      case 'centos':
        return h(SolutionCentOS, null);
      case 'debian':
        return h(SolutionDebian, null);
      case 'fedora':
        return h(SolutionFedora, null);
      case 'macos':
        return h(SolutionMacOS, null);
      case 'qubes':
        return h(SolutionQubes, null);
      case 'ubuntu':
        return h(SolutionUbuntu, null);
      case 'windows':
        return h(SolutionWindows, null);
    }
  }
  render() {
    return (h(Host, null, h("meta-tags", { defaults: this.defaults, "page-title": this.defaults.solutionPage.meta.pageTitle(this.framework.name), description: this.defaults.solutionPage.meta.pageTitle(this.framework.name) }), h("site-header", { defaults: this.defaults, class: "heading-container", sticky: true }), h(ResponsiveContainer, { id: "top", as: "section" }, h("div", { class: "heading-group" }, h("webp-image", { width: "301", height: "167", loading: "eager", src: this.framework.logo, alt: this.framework.name, class: "react" }), h(Heading, { level: 2, as: "h1" }, this.framework.name, " & ", this.defaults.brandName), h(Paragraph, { level: 2 }, this.defaults.solutionPage.subHeader.text1, ' ', this.framework.name, ' ', this.defaults.solutionPage.subHeader.text2), h(Button, { anchor: true, href: "#install", id: "get-started", style: { '--button-background': this.framework.theme } }, "Get Started"))), this.getComponent(), h("section", { id: "continue" }, h(ResponsiveContainer, null, h(Heading, { level: 3 }, "Continue your ", this.defaults.brandName, " journey."), h(Paragraph, null, "This is only the beginning. Browse through the ", this.defaults.brandName, ' ', h("a", { href: this.defaults.social.github, target: "_blank", rel: "noopener" }, "GitHub repository"), ' ', "or dive deeper by going through the", ' ', h("a", { href: "/docs" }, "documentation"), ' ', "."))), this.Demo(), h("pre-footer", { defaults: this.defaults }), h("capacitor-site-footer", { defaults: this.defaults })));
  }
};
SolutionPage.style = solutionPageCss;

export { SolutionPage as S };

//# sourceMappingURL=solution-page-ce3d7489.js.map