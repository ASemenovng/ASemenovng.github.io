export const siteContent = {
  ru: {
    meta: {
      lang: "ru",
      title: "Андрей Семенов | Профессиональный профиль",
      description: "Профессиональный профиль Андрея Семенова: инженерная работа, исследования, преподавание и технический стек.",
      brand: "Андрей Семенов"
    },
    nav: {
      experience: "Опыт",
      techStack: "Технический стек",
      education: "Образование",
      research: "Исследования",
      teaching: "Преподавание",
      contacts: "Контакты"
    },
    hero: {
      eyebrow: "Профиль",
      name: "Андрей Семенов",
      title: "Разработчик, исследователь",
      summary: "Работаю с Java, Kotlin, Python, распределенными системами и исследовательскими задачами в области блокчейн, криптографии, zkp.",
      secondaryAction: "Контакты"
    },
    education: {
      eyebrow: "Образование",
      title: "Образование",
      items: [
        {
          period: "МФТИ",
          title: "Магистратура",
          place: "Блокчейн"
        },
        {
          period: "МФТИ + РАНХиГС",
          title: "Бакалавриат",
          place: "Прикладная математика и информатика + Прикладная математика и экономика"
        }
      ]
    },
    experience: {
      eyebrow: "Опыт",
      title: "Опыт",
      items: [
        {
          period: "04.2025 - настоящее время",
          title: "Яндекс",
          place: "Финтех",
          sections: [
            {
              title: "Задачи",
              items: [
                "Работа с Kotlin и Spring; использование JUnit, Mockito и Cucumber для тестирования.",
                "Использование Colima, Kubernetes, Prometheus и Grafana для деплоя и мониторинга.",
                "Разработка проектов на Kotlin 2.1.0 и Java 21; хранение данных в PostgreSQL и ClickHouse.",
                "Участие в интервью в команде и помощь стажерам с адаптацией."
              ]
            },
            {
              title: "Результаты",
              items: [
                "Разработал FSM для обработки платежей, что вдвое сократило время транзакции.",
                "Обновил модуль оплаты по QR-коду и провел рефакторинг существующего кода.",
                "Руководил разработкой нового проекта для работы с чаевыми и проектом по автоматическому клирингу транзакций в платежном движке.",
                "Внедрил механизм плавной раскатки динамических конфигов с процентным управлением, что сократило потенциальный downtime при проблемных релизах с 100% до целевого %."
              ]
            }
          ]
        },
        {
          period: "07.2023 - 04.2025",
          title: "ВКонтакте",
          place: "Большие данные",
          sections: [
            {
              title: "Задачи",
              items: [
                "Работа с кластерами Hadoop и YTsaurus на Java и Python.",
                "Использование Docker, Kubernetes и AirFlow для деплоя и тестирования.",
                "Разработка проектов на Java и Python; хранение данных в HDFS и HBase.",
                "Участие в code review и интервью в команде, помощь стажерам с адаптацией."
              ]
            },
            {
              title: "Результаты",
              items: [
                "Создал cold storage в Amazon S3 и автоматизировал перенос данных из HDFS, что снизило нагрузку на namenodes и стоимость дополнительного оборудования.",
                "Вел разработку системы валидации данных и конфигов на Python в HDFS с автоматическими проверками и подсказками по исправлениям.",
                "Участвовал в миграции сервисов с Hadoop на YTsaurus, создал библиотеку для добавления счетчиков при запуске Hadoop-задач на YTsaurus и вел разработку библиотек для адаптации Hadoop-кода к YTsaurus."
              ]
            }
          ]
        },
        {
          period: "12.2021 - 07.2023",
          title: "СБЕР",
          place: "Разработка на Java / Kotlin",
          sections: [
            {
              title: "Задачи",
              items: [
                "Разработка приложения для бизнес-пользователей на Java и Kotlin.",
                "Создание финансовой клиент-серверной MVC-архитектуры на Spring.",
                "Использование Oracle SQL и внутренних API для работы с базой данных.",
                "Участие в интеграции RMS совместно с подразделением кибербезопасности."
              ]
            },
            {
              title: "Результаты",
              items: [
                "Автоматизировал задачи управления счетами и жизненного цикла продуктов.",
                "Оптимизировал поиск шаблонов договоров.",
                "Автоматизировал деплой в OpenShift через CI-скрипты Jenkins."
              ]
            }
          ]
        }
      ]
    },
    research: {
      eyebrow: "Исследования",
      title: "Исследования",
      items: [
        {
          period: "Магистерская работа",
          title: "Ончейн-реализация циклов эллиптических кривых на EVM",
          description: "Работа посвящена криптографии и zkp. Рассмотрена возможность реализации ончейн-арифметики на кривой mnt4-753 в виртуальной машине Ethereum, предложена теоретическая модель, а решение реализовано как библиотека. Реализация удешевляет вычисление рекурсивных zk-доказательств во многих существующих контрактах."
        },
        {
          period: "Бакалаврская работа",
          title: "Влияние дивидендных стратегий на совокупную доходность акций",
          description: "Работа была представлена на университетской конференции. В исследовании получены результаты о влиянии дивидендного фактора на совокупную доходность с использованием факторных моделей, например Fama-French; также были предложены собственные факторы и изучено их влияние."
        }
      ]
    },
    teaching: {
      eyebrow: "Преподавание",
      title: "Преподавание",
      items: [
        {
          period: "2023 - 2024",
          title: "Лектор в МФТИ",
          place: "Java Programming",
          description: "Разработал и преподавал годовой курс разработки на Java в МФТИ. Курс включал Java Core, реализацию структур данных, некоторые паттерны проектирования, веб-разработку на Spring с созданием реального работающего проекта, а также работу с базами данных.",
          links: [
            { label: "Java Core", href: "https://github.com/ASemenovng/Java_Autumn" },
            { label: "Java Spring", href: "https://github.com/ASemenovng/Java_Spring" }
          ]
        }
      ]
    },
    techStack: {
      eyebrow: "Технический стек",
      title: "Технический стек",
      items: [
        {
          period: "Языки программирования",
          title: "Java, Kotlin, Python, Scala"
        },
        {
          period: "Фреймворки и библиотеки",
          title: "Spring, JUnit, Mockito, Cucumber, NumPy, Pandas"
        },
        {
          period: "Большие данные и облачные технологии",
          title: "Hadoop, YTsaurus, AirFlow, Amazon S3"
        },
        {
          period: "Контейнеризация и CI/CD",
          title: "Docker, Kubernetes, GitLab CI, Jenkins, Nexus, Artifactory"
        },
        {
          period: "Базы данных",
          title: "ClickHouse, YDB, HBase, Oracle SQL, PostgreSQL, MySQL"
        },
        {
          period: "Мониторинг",
          title: "Grafana, Prometheus, Graphite"
        }
      ]
    },
    contacts: {
      eyebrow: "Контакты",
      title: "Контакты",
      items: [
        { period: "Email", title: "semenov.andrei.hello@gmail.com", href: "mailto:semenov.andrei.hello@gmail.com" },
        { period: "Telegram", title: "@AndrewSemenov", href: "https://t.me/AndrewSemenov" },
        { period: "GitHub", title: "ASemenovng", href: "https://github.com/ASemenovng" }
      ]
    },
    footer: "Андрей Семенов"
  },
  en: {
    meta: {
      lang: "en",
      title: "Andrew Semenov | Professional Profile",
      description: "Andrew Semenov's professional profile: engineering work, research, teaching, and technical stack.",
      brand: "Andrew Semenov"
    },
    nav: {
      experience: "Experience",
      techStack: "Tech Stack",
      education: "Education",
      research: "Research",
      teaching: "Teaching",
      contacts: "Contacts"
    },
    hero: {
      eyebrow: "Profile",
      name: "Andrew Semenov",
      title: "Software developer, researcher",
      summary: "I work with Java, Kotlin, Python, distributed systems, and research tasks in blockchain, cryptography, zkp.",
      secondaryAction: "Contacts"
    },
    education: {
      eyebrow: "Education",
      title: "Education",
      items: [
        {
          period: "MIPT",
          title: "Master's degree",
          place: "Blockchain"
        },
        {
          period: "MIPT + RANEPA",
          title: "Bachelor's degree",
          place: "Applied Mathematics and Computer Science + Applied Mathematics and Economics"
        }
      ]
    },
    experience: {
      eyebrow: "Experience",
      title: "Experience",
      items: [
        {
          period: "04.2025 - present",
          title: "Yandex",
          place: "Fintech",
          sections: [
            {
              title: "Tasks",
              items: [
                "I work with Kotlin and Spring; I use JUnit, Mockito, and Cucumber for testing.",
                "Colima, Kubernetes, Prometheus, and Grafana are used for deployment and monitoring.",
                "Projects are developed in Kotlin 2.1.0 and Java 21; data is stored in PostgreSQL and ClickHouse.",
                "I participate in interviews in the team and help interns with adaptation."
              ]
            },
            {
              title: "Results",
              items: [
                "I developed an FSM for payment processing, which halved the transaction time.",
                "I updated the QR code payment module and refactored the existing code.",
                "I led the development of a new project for working with tips and a project for automatic transaction clearing in the payment engine.",
                "I introduced a mechanism for smooth rollout of dynamic configs with percentage-based control, reducing potential downtime in problematic releases from 100% to the target percentage."
              ]
            }
          ]
        },
        {
          period: "07.2023 - 04.2025",
          title: "VK",
          place: "Big data",
          sections: [
            {
              title: "Tasks",
              items: [
                "I work with Hadoop and YTsaurus clusters in Java and Python.",
                "I use Docker, Kubernetes, and AirFlow for deployment and testing.",
                "Projects are developed in Java and Python; data is stored in HDFS and HBase.",
                "I participate in code reviews and interviews in the team, and I help interns with adaptation."
              ]
            },
            {
              title: "Results",
              items: [
                "I created cold storage in Amazon S3 and automated data transfer from HDFS, which reduced the load on the namenodes and the cost of additional hardware.",
                "I led the development of a data validation system and configs in Python in HDFS with automatic checks and hints about possible fixes.",
                "I participated in the migration of services from Hadoop to YTsaurus, created a library for adding counters when running Hadoop tasks on YTsaurus, and led the development of libraries for adapting Hadoop code to YTsaurus."
              ]
            }
          ]
        },
        {
          period: "12.2021 - 07.2023",
          title: "SBER",
          place: "Java / Kotlin development",
          sections: [
            {
              title: "Tasks",
              items: [
                "I developed an application for business users in Java and Kotlin.",
                "I created a financial client-server MVC architecture on Spring.",
                "I used Oracle SQL and internal APIs to work with the database.",
                "I participated in the integration of RMS together with the cybersecurity department."
              ]
            },
            {
              title: "Results",
              items: [
                "Automated the tasks of account management and product lifecycle.",
                "Optimized the search for contract templates.",
                "Automated deployment in OpenShift via Jenkins CI scripts."
              ]
            }
          ]
        }
      ]
    },
    research: {
      eyebrow: "Research",
      title: "Research",
      items: [
        {
          period: "Master's degree",
          title: "Onchain implementation of elliptic curve cycles on EVM",
          description: "The master's work is written on cryptography and zkp. The paper examines the possibility of implementing onchain arithmetic on the mnt4-753 curve in an Ethereum Virtual Machine, proposes a theoretical model, and implements the solution as a library. The implementation makes it cheaper to calculate recursive zk-proofs in many existing contracts."
        },
        {
          period: "Bachelor's degree",
          title: "The impact of dividend strategies on total stock returns",
          description: "I presented a paper at a university conference. In the work, we obtained results on the effect of the dividend factor on total profitability through the use of factor models, for example Fama-French; my own factors were also proposed and their influence was studied."
        }
      ]
    },
    teaching: {
      eyebrow: "Teaching",
      title: "Teaching",
      items: [
        {
          period: "2023 - 2024",
          title: "Lecturer at MIPT",
          place: "Java Programming",
          description: "I developed and taught a one-year Java development course at MIPT. It included Java Core, the implementation of data structures, some design patterns, web development in Spring with the creation of a real working project, and working with databases.",
          links: [
            { label: "Java Core", href: "https://github.com/ASemenovng/Java_Autumn" },
            { label: "Java Spring", href: "https://github.com/ASemenovng/Java_Spring" }
          ]
        }
      ]
    },
    techStack: {
      eyebrow: "Tech Stack",
      title: "Tech Stack",
      items: [
        {
          period: "Programming languages",
          title: "Java, Kotlin, Python, Scala"
        },
        {
          period: "Frameworks and libraries",
          title: "Spring, JUnit, Mockito, Cucumber, NumPy, Pandas"
        },
        {
          period: "Big data and cloud technologies",
          title: "Hadoop, YTsaurus, AirFlow, Amazon S3"
        },
        {
          period: "Containerization, CI/CD",
          title: "Docker, Kubernetes, GitLab CI, Jenkins, Nexus, Artifactory"
        },
        {
          period: "DBMS",
          title: "ClickHouse, YDB, HBase, Oracle SQL, PostgreSQL, MySQL"
        },
        {
          period: "Monitoring",
          title: "Grafana, Prometheus, Graphite"
        }
      ]
    },
    contacts: {
      eyebrow: "Contacts",
      title: "Contacts",
      items: [
        { period: "Email", title: "semenov.andrei.hello@gmail.com", href: "mailto:semenov.andrei.hello@gmail.com" },
        { period: "Telegram", title: "@AndrewSemenov", href: "https://t.me/AndrewSemenov" },
        { period: "GitHub", title: "ASemenovng", href: "https://github.com/ASemenovng" }
      ]
    },
    footer: "Andrew Semenov"
  }
};
