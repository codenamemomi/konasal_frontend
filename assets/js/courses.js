const courses = [
    {
        name: "Artificial Intelligence",
        category: "AI",
        duration:"3 Months",
        description: "The AI 3-Month Course is an intensive program designed to provide learners with the foundational and advanced knowledge of Artificial Intelligence (AI) techniques and applications. Over the span of three months, you will be guided through key concepts such as Machine Learning, Neural Networks, Deep Learning, Natural Language Processing (NLP), Generative AI, Reinforcement Learning, and AI Ethics. With hands-on experience and real-world project applications, you'll learn how to develop AI models, tackle complex problems, and deploy AI-driven solutions across various industries. The course also offers insights into Large Language Models (LLMs), AI in Healthcare, Business, and more, making it a comprehensive journey for anyone looking to establish themselves as an AI professional.",
        summary: "Learn about autonomous AI systems that can make decisions and take actions independently.",
        image: "./assets/images/ai.jpg",
        price:"3,500",
        courseObjectives: [
            "Understand AI Fundamentals: Learn the types of AI, applications in various industries, and gain proficiency in Python programming for AI development.",
            "Master Machine Learning Techniques: Get hands-on experience in building regression, classification, clustering models, and using ensemble methods to improve model performance.",
            "Develop Neural Networks: Dive into the concepts of Convolutional Neural Networks (CNNs) and Recurrent Neural Networks (RNNs) to handle image recognition and sequential data tasks.",
            "Apply Advanced AI Techniques: Gain expertise in Generative AI (GANs), Reinforcement Learning, and Natural Language Processing (NLP).",
            "Work on Real-World Applications: Explore AI applications in fields such as Computer Vision, Healthcare, Business, and Art.",
            "Deploy AI Models: Learn how to deploy AI models using tools like Flask and Django while understanding MLOps pipelines for scalable solutions.",
            "Build a Portfolio: Work on real-world projects, including capstone projects, and document your work for a strong professional portfolio."
        ],
        curriculum: [
            {
            day: "Week 1-2: Introduction and Foundations",
            topics: [
                "History, types (narrow, general, super AI)",
                "Applications of AI in different industries",
                "History, types (narrow, general, super AI)",
                "Applications of AI in different industries",
                "Basic Python concepts, libraries (NumPy, Pandas, Matplotlib)",
                "Understanding AI development tools (Jupyter Notebook, Google Colab)",
                "Linear algebra (vectors, matrices, eigenvalues)",
                "Probability and statistics basics",
                "State-space representation, BFS, DFS, A*",
                "Optimization concepts: Hill climbing, Simulated Annealing",
                "Data cleaning, scaling, normalization",
                "Encoding categorical data, feature selection",
                "Supervised, unsupervised, and reinforcement learning",
                "Algorithms overview: Regression, classification, clustering"
            ]
        }, 
        {
            day: "Weeks 3-4: Machine Learning",
            topics: [
                "Linear Regression, Polynomial Regression",
                "Evaluation metrics (R², RMSE)",
                "Logistic Regression, Naive Bayes, Decision Trees",
                "Model evaluation (confusion matrix, ROC-AUC)",
                "K-Means, Hierarchical clustering",
                "Evaluation metrics (silhouette score, Davies-Bouldin index)",
                "PCA, dimensionality reduction",
                "Techniques for improving model performance",
                "Random Forest, Gradient Boosting (XGBoost, CatBoost, LightGBM)",
                "Stacking and voting classifiers",   
            ]
        },
        {
            day: "Weeks 5-6: Neural Networks and Deep Learning Basics",
            topics: [
                "Perceptron's, activation functions (ReLU, Sigmoid, Tanh)",
                "Feedforward networks and backpropagation",
                "Introduction to TensorFlow and PyTorch",
                "Building simple neural networks",
                "CNN architecture, convolution layers, pooling layers",
                "Applications in image recognition",
                "Sequence modeling, LSTMs, GRUs",
                "Use cases in time series and text",
                "Gradient descent, learning rate scheduling",
                "Regularization techniques (dropout, weight decay)"
            ]
        },
        {
            day: "Weeks 7-8: Advanced AI Topics",
            topics: [
                "Tokenization, stemming, lemmatization",
                "Word embeddings (Word2Vec, GloVe)",
                "Transformers and BERT architecture",
                "Applications in sentiment analysis and chatbots",
                "GANs (Generative Adversarial Networks)",
                "Applications in image and video generation",
                "Markov Decision Processes (MDPs), Q-Learning",
                "Deep Q-Networks (DQN)",
                "Bias in AI models",
                "Explainability and interpretability"
            ]
        },
        {
            day: "Weeks 9-10: Real-World Applications and Projects",
            topics: [
                "Object detection (YOLO, Faster R-CNN)",
                "Image segmentation (U-Net)",
                "Diffusion models, Stable Diffusion",
                "Applications in art and text-to-image generation",
                "Use cases in diagnostics, predictive analytics, and marketing",
                "Dataset selection, preprocessing, model building, deployment",
            ]
        },
        {
            day: "Weeks 11-12: Advanced Research and Portfolio",
            topics: [
                "Understanding GPT architecture",
                "Fine-tuning and prompt engineering",
                "Deploying models using Flask/Django",
                "MLOps pipelines and scaling solutions",
                "Kaggle competitions, AI ethics debates",
                "Exploring edge AI and IoT integration",
                "Focus on generative AI, reinforcement learning, or computer vision",
                "Documenting projects, creating a GitHub portfolio",
                "Resume and LinkedIn optimization for AI roles"
            ]
        }
        ],
        targetAudience: [
            "Beginners in AI: Those looking to start their AI journey with a solid foundation in Python programming and AI fundamentals.",
            "Software Engineers: Developers who want to expand their knowledge and apply AI to their existing skill set.",
            "Data Scientists: Data professionals looking to enhance their expertise by diving deeper into AI methods and technologies.",
            "Researchers and Academics: Those interested in AI research or pursuing higher education in AI-related fields.",
            "Entrepreneurs and Innovators: Individuals looking to implement AI solutions in startups, businesses, or product development."
        ],
        prerequisites: [
            "Basic programming knowledge (preferably Python)",
            "High school level mathematics",
            "Enthusiasm for learning AI concepts"
        ],
        courseBenefits: [
            "Comprehensive Curriculum: Cover both foundational and advanced AI topics, from Python programming to deep learning and AI ethics.",
            "Hands-On Learning: Implement models using popular AI frameworks like TensorFlow, PyTorch, and Kaggle, gaining practical experience with real datasets.",
            "Expert-Led Instruction: Learn from AI professionals with deep industry knowledge and practical experience in deploying AI models.",
            "Real-World Applications: Work on projects involving computer vision, NLP, healthcare, and business to ensure your skills are applicable in diverse domains.",
            "Capstone Project: Apply everything you’ve learned to a final project focused on Generative AI, Reinforcement Learning, or Computer Vision.",
            "AI Ethics: Understand how to build responsible AI models by addressing ethical concerns, biases, and ensuring fairness.",
            "Portfolio Development: Build and document projects that you can showcase to potential employers or clients, making you job-ready for AI-related roles.",
            "Career Advancement: Gain knowledge and certifications that will help you advance in or transition to AI roles in industries like technology, finance, healthcare, and more."
        ],
        courseCompletion: [
            "Upon successful completion of the AI 3-Month Course, participants will receive a Certificate of Completion that validates their AI skills and knowledge. This certificate can be shared on platforms like LinkedIn, added to resumes, or used to demonstrate expertise in AI during job interviews. It will signify your capability in:",
            "Machine learning techniques and model building.",
            "Deep learning and neural network architecture.",
            "Natural language processing (NLP) and generative AI.",
            "Real-world AI applications and deployment."
        ] 
    },
    {
        name: "AWS Master",
        category: "Cloud",
        duration: "30 Days",
        summary: "Become an expert in Amazon Web Services cloud platform.",
        image: "./assets/images/aws.jpg",
        price: "1,350",
        description: "This course provides a comprehensive introduction to Cloud Computing concepts with a strong practical focus on Amazon Web Services (AWS). Starting with foundational cloud principles, deployment models, and delivery models, the course progresses into hands-on AWS services such as EC2, S3, VPC, IAM, ELB, RDS, and more. Learners will gain experience in provisioning cloud resources, configuring security, automating infrastructure, and managing cloud-based applications using best practices and real-world scenarios.",
        courseObjectives: [
            "Understand the fundamentals of cloud computing and various service/deployment models.",
            "Identify and use core AWS services for computing, storage, networking, and security.",
            "Launch and manage EC2 instances using best practices.",
            "Configure scalable storage solutions using S3 and EBS.",
            "Implement security using IAM, Security Groups, and Key Pairs.",
            "Monitor AWS resources using CloudWatch and set up notifications using SNS and SQS.",
            "Design and configure auto-scaling environments and load balancers.",
            "Work with AWS VPC to design secure cloud networks.",
            "Deploy applications using Elastic Beanstalk.",
            "Set up and manage relational databases using AWS RDS."
        ],

        curriculum: [
            {
                day: "Introduction to Cloud Computing",
                topics: [
                    "A Short history",
                    "Client Server Computing Concepts",
                    "Challenges with Distributed Computing",
                    "Introduction to Cloud Computing",
                    "Why Cloud Computing?",
                    "Benefits of Cloud Computing"
                ]
            },
            {
                day: "Cloud Computing Deployment Models",
                topics: [
                    "Private Cloud",
                    "Public Cloud",
                    "Hybrid Cloud"
                ]
            },
            {
                day: "Cloud Delivery Models",
                topics: [
                    "Software as a Service (SaaS)",
                    "Platform as a Service (PaaS)",
                    "Infrastructure as a Service (IaaS)"
                ]
            },
            {
                day: "Introduction to AWS",
                topics: [
                    "Subscription to AWS",
                    "AWS Free tier – Limits and usage",
                    "Introduction to the AWS Management Console"
                ]
            },
            {
                day: "Elastic Compute Cloud (EC2) Essentials",
                topics: [
                    "Regions and Availability Zones - How to choose the right one",
                    "Amazon Machine Images (AMI)",
                    "Working with AMIs",
                    "Choosing the right AMI",
                    "Pricing model in EC2 instances",
                    "On-demand vs Spot vs Reserved vs Dedicated Hosts",
                    "EC2 Reserved Instance",
                    "AWS Marketplace"
                ]
            },
            {
                day: "EC2 Instances",
                topics: [
                    "Building EC2 Windows & Linux Instances",
                    "Security via Key Pairs",
                    "Working with Security Groups",
                    "Elastic IPs",
                    "Creating custom AMIs",
                    "Placement groups",
                    "EC2 instance protection",
                    "User Data Management",
                    "AWS Simple System Manager (SSM)"
                ]
            },
            {
                day: "Elastic Block Store (EBS)",
                topics: [
                    "Creating and managing volumes",
                    "Attaching/detaching volumes",
                    "Mounting/unmounting volumes",
                    "Creating snapshots",
                    "Increasing volume size"
                ]
            },
            {
                day: "Elastic Load Balancer (ELB)",
                topics: [
                    "Creating load balancers",
                    "Internal vs External load balancers",
                    "Load balancing protocols",
                    "Security groups for load balancers",
                    "Configuring health checks",
                    "Adding multiple instances"
                ]
            },
            {
                day: "Auto Scaling",
                topics: [
                    "Autoscaling concepts and components",
                    "Benefits of autoscaling",
                    "Creating launch configurations",
                    "Configuring autoscaling policies",
                    "Integration with ELB"
                ]
            },
            {
                day: "Simple Storage Service (S3)",
                topics: [
                    "Creating and managing buckets",
                    "Adding/getting/deleting objects",
                    "Creating static websites",
                    "S3 permissions",
                    "Life cycle management",
                    "Accessing S3 via tools"
                ]
            },
            {
                day: "Glacier Storage",
                topics: [
                    "Creating Vaults",
                    "Accessing Glacier via tools",
                    "Using Glacier for backups",
                    "Retrieval periods"
                ]
            },
            {
                day: "Identity and Access Management (IAM)",
                topics: [
                    "Creating user accounts",
                    "Multi-factor Authentication (MFA)",
                    "Roles and Groups",
                    "Permission delegation",
                    "Custom policies",
                    "Account settings",
                    "Credential Reports"
                ]
            },
            {
                day: "Virtual Private Cloud (VPC)",
                topics: [
                    "AWS networking options",
                    "Creating VPCs",
                    "ACL & Security Groups",
                    "Internet Gateways",
                    "Connecting to instances"
                ]
            },
            {
                day: "Monitoring and Notification Services",
                topics: [
                    "CloudWatch for monitoring",
                    "Service Health Dashboard",
                    "Getting instance statistics",
                    "Setting up notifications",
                    "Simple Notification Service (SNS)",
                    "Simple Queue Service (SQS)"
                ]
            },
            {
                day: "Route 53",
                topics: [
                    "Route 53 Overview",
                    "Setting up DNS Namespace",
                    "Creating DNS records"
                ]
            },
            {
                day: "Elastic Beanstalk",
                topics: [
                    "Creating Web apps",
                    "Environment overview",
                    "Migrating content",
                    "Modifying deployment properties"
                ]
            },
            {
                day: "Relational Database Service (RDS)",
                topics: [
                    "Selecting Database Engines",
                    "Configuring Database Engines",
                    "Creating Databases",
                    "Automatic backups",
                    "DB Security Groups"
                ]
            }
        ],
        targetAudience: [
            "IT professionals transitioning to cloud roles",
            "Software developers and engineers seeking cloud deployment experience",
            "System administrators and DevOps professionals",
            "Students pursuing AWS certifications",
            "Tech entrepreneurs interested in cloud deployment",
            "Anyone curious about cloud technologies"
        ],

        courseBenefits: [
            "Hands-on Experience with AWS Console and CLI",
            "Career-Ready Cloud Skills",
            "AWS Certification Exam Preparation",
            "Cost Optimization Strategies",
            "Real-World Deployment Scenarios",
            "Access to AWS Free Tier",
            "Industry-Recognized Cloud Skills"
        ],

        courseCompletion: "Upon successful completion of the course, participants will receive a Certificate of Completion in AWS." 
    },
    {
        name: "Azure Admin",
        category: "Cloud",
        duration: "",
        summary: "Master Microsoft's cloud computing platform and services.",
        image: "./assets/images/azure.png",
        price: "2,700",
        description: "The AZ-104: Microsoft Azure Administrator course is designed to provide participants with the foundational and advanced skills required to effectively manage and administer Microsoft Azure environments. This training covers the essential tools and techniques used by Azure administrators, including managing identities, storage, virtual machines, virtual networks, and security. Participants will also gain hands-on experience with Azure services, helping them prepare for the AZ-104 certification exam.",
        courseObjectives: [
            "Understand Azure Fundamentals: Grasp core Azure concepts, resources, and services, and become familiar with the Azure portal.",
            "Manage Azure Identities and Governance: Implement Azure Active Directory, manage user and group roles, configure access to resources, and govern subscriptions using policies and cost management tools.",
            "Implement and Manage Azure Storage: Set up and configure Azure storage accounts, manage access to storage, and work with Azure Files and Blob Storage.",
            "Deploy and Manage Azure Compute Resources: Automate resource deployment using ARM templates and Bicep files, and manage virtual machines, containers, and App Services.",
            "Implement and Manage Virtual Networking: Configure and manage virtual networks, network security, and load balancing, ensuring secure and reliable network access.",
            "Monitor and Maintain Azure Resources: Use monitoring tools like Azure Monitor to analyze metrics, set up alerts, configure backup, and manage disaster recovery with Azure Backup and Site Recovery."
        ],
        curriculum: [
            {
                day: "Azure Fundamentals",
                topics: [
                    "Core Azure architectural components",
                    "Azure services and products",
                    "Azure management tools",
                    "Azure subscriptions and support plans"
                ]
            },
            {
                day: "Prerequisites for Azure Administrators",
                topics: [
                    "Basic cloud concepts",
                    "Networking fundamentals",
                    "Security concepts",
                    "Windows/Linux operating systems"
                ]
            },
            {
                day: "Manage Azure identities and governance",
                topics: [
                    {
                        title: "Manage Microsoft Entra users and groups",
                        topics: [
                            "Create users and groups",
                            "Manage user and group properties",
                            "Manage licenses in Microsoft Entra ID",
                            "Manage external users",
                            "Configure self-service password reset (SSPR)"
                        ]
                    },
                    {
                        title: "Manage access to Azure resources",
                        topics: [
                            "Manage built-in Azure roles",
                            "Assign roles at different scopes",
                            "Interpret access assignments"
                        ]
                    },
                    {
                        title: "Manage Azure subscriptions and governance",
                        topics: [
                            "Implement and manage Azure Policy",
                            "Configure resource locks",
                            "Apply and manage tags on resources",
                            "Manage resource groups",
                            "Manage subscriptions",
                            "Manage costs by using alerts, budgets, and Azure Advisor recommendations",
                            "Configure management groups"
                        ]
                    }
                ]
            },
            {
                day: "Implement and manage storage",
                topics: [
                    {
                        title: "Configure access to storage",
                        topics: [
                            "Configure Azure Storage firewalls and virtual networks",
                            "Create and use shared access signature (SAS) tokens",
                            "Configure stored access policies",
                            "Manage access keys",
                            "Configure identity-based access for Azure Files"
                        ]
                    },
                    {
                        title: "Configure and manage storage accounts",
                        topics: [
                            "Create and configure storage accounts",
                            "Configure Azure Storage redundancy",
                            "Configure object replication",
                            "Configure storage account encryption",
                            "Manage data by using Azure Storage Explorer and AzCopy"
                        ]
                    },
                    {
                        title: "Configure Azure Files and Azure Blob Storage",
                        topics: [
                            "Create and configure a file share in Azure Storage",
                            "Create and configure a container in Blob Storage",
                            "Configure storage tiers",
                            "Configure snapshots and soft delete for Azure Files",
                            "Configure blob lifecycle management",
                            "Configure blob versioning"
                        ]
                    }
                ]
            },
            {
                day: "Deploy and manage Azure compute resources",
                topics: [
                    {
                        title: "Automate deployment of resources by using ARM templates or Bicep files",
                        topics: [
                            "Interpret an Azure Resource Manager template or a Bicep file",
                            "Modify an existing Azure Resource Manager template",
                            "Modify an existing Bicep file",
                            "Deploy resources by using an Azure Resource Manager template or a Bicep file",
                            "Export a deployment as an Azure Resource Manager template or convert an Azure Resource Manager template to a Bicep file"
                        ]
                    },
                    {
                        title: "Create and configure virtual machines",
                        topics: [
                            "Create a virtual machine",
                            "Configure Azure Disk Encryption",
                            "Move a virtual machine to another resource group, subscription, or region",
                            "Manage virtual machine sizes",
                            "Manage virtual machine disks",
                            "Deploy virtual machines to availability zones and availability sets",
                            "Deploy and configure an Azure Virtual Machine Scale Sets"
                        ]
                    },
                    {
                        title: "Provision and manage containers in the Azure portal",
                        topics: [
                            "Create and manage an Azure container registry",
                            "Provision a container by using Azure Container Instances",
                            "Provision a container by using Azure Container Apps",
                            "Manage sizing and scaling for containers, including Azure Container Instances and Azure Container Apps"
                        ]
                    },
                    {
                        title: "Create and configure Azure App Service",
                        topics: [
                            "Provision an App Service plan",
                            "Configure scaling for an App Service plan",
                            "Create an App Service",
                            "Configure certificates and Transport Layer Security (TLS) for an App Service",
                            "Map an existing custom DNS name to an App Service",
                            "Configure backup for an App Service",
                            "Configure networking settings for an App Service",
                            "Configure deployment slots for an App Service"
                        ]
                    }
                ]
            },
            {
                day: "Implement and manage virtual networking",
                topics: [
                    {
                        title: "Configure and manage virtual networks in Azure",
                        topics: [
                            "Create and configure virtual networks and subnets",
                            "Create and configure virtual network peering",
                            "Configure public IP addresses",
                            "Configure user-defined network routes",
                            "Troubleshoot network connectivity"
                        ]
                    },
                    {
                        title: "Configure secure access to virtual networks",
                        topics: [
                            "Create and configure network security groups (NSGs) and application security groups",
                            "Evaluate effective security rules in NSGs",
                            "Implement Azure Bastion",
                            "Configure service endpoints for Azure platform as a service (PaaS)",
                            "Configure private endpoints for Azure PaaS"
                        ]
                    },
                    {
                        title: "Configure name resolution and load balancing",
                        topics: [
                            "Configure Azure DNS",
                            "Configure an internal or public load balancer",
                            "Troubleshoot load balancing"
                        ]
                    }
                ]
            },
            {
                day: "Monitor and maintain Azure resources",
                topics: [
                    {
                        title: "Monitor resources in Azure",
                        topics: [
                            "Interpret metrics in Azure Monitor",
                            "Configure log settings in Azure Monitor",
                            "Query and analyze logs in Azure Monitor.",
                            "Set up alert rules, action groups, and alert processing rules in Azure Monitor.",
                            "Configure and interpret monitoring of virtual machines, storage accounts, and networks by using Azure Monitor Insights.",
                            "Use Azure Network Watcher and Connection Monitor."
                        ]
                    },
                    {
                        title: "Implement backup and recovery",
                        topics: [
                            "Create a Recovery Services vault",
                            "Create an Azure Backup vault",
                            "Create and configure a backup policy",
                            "Perform backup and restore operations by using Azure Backup.",
                            "Configure Azure Site Recovery for Azure resources.",
                            "Perform a failover to a secondary region by using Site Recovery.",
                            "Configure and interpret reports and alerts for backups."
                        ]
                    }
                ]
            }
        ],
        
        targetAudience: [
            "Azure Administrators: IT professionals responsible for managing and maintaining Azure environments.",
            "Cloud Administrators: Individuals with experience in cloud technologies who want to specialize in Azure.",
            "IT Professionals: Those transitioning from on-premises infrastructure management to cloud-based environments.",
            "Technical Managers: Managers who need to oversee Azure-related projects and teams.",
            "Anyone Preparing for the AZ-104 Exam: Individuals aiming for certification in Azure administration.",
            "prerequisites: Prior experience with basic IT concepts or cloud technologies is helpful but not required.",
        ],      
        courseBenefits: [
            "Comprehensive Coverage: Learn essential Azure services and tools to effectively manage an Azure environment.",
            "Hands-On Experience: Practical labs and real-world examples to reinforce learning and prepare for certification.",
            "Exam Readiness: Thorough preparation for the AZ-104 certification exam, which is recognized globally by employers.",
            "Industry-Relevant Skills: Gain skills that are in high demand, enhancing your career prospects in cloud administration.",
            "Increased Productivity: Learn how to automate processes, monitor resources, and manage virtual networking and storage efficiently in Azure.",
            "Career Advancement: Enhance your profile with a certification that is widely recognized in the IT industry."
        ],
        
        courseCompletion: "Upon successful completion of the AZ-104: Microsoft Azure Administrator course, participants will receive a Course Completion Certificate. This certificate verifies that the participant has gained the necessary skills to manage Azure cloud services and is prepared to handle the responsibilities of an Azure administrator. It can be added to your resume or shared on professional platforms such as LinkedIn to demonstrate your proficiency in Azure administration."
    },
    {
        name: "Azure DevOps",
        category: "DevOps",
        duration: "40 days",
        summary: "Learn to bridge the gap between development and operations for faster delivery.",
        image: "./assets/images/devops.png",
        price: "1,500",
        description: "The Microsoft Azure DevOps (AZ-400) course is designed for IT professionals, developers, and DevOps engineers who want to learn how to implement DevOps practices using Microsoft Azure. This course covers all aspects of DevOps lifecycle management, including planning, development, testing, delivery, monitoring, and automation. It provides hands-on experience with key DevOps tools and Azure services such as Azure Repos, Azure Pipelines, Azure Artifacts, Kubernetes, Docker, Terraform, Jenkins, and more.",
        courseObjectives: [
            "Master Core Azure Concepts: Understand cloud computing fundamentals and the Azure platform, including Azure CLI, PowerShell, and Azure Resource Manager.",
            "Use Linux Effectively: Learn basic Linux commands, file management, and shell scripting for automating tasks.",
            "Understand DevOps Principles: Gain insight into the DevOps lifecycle, tools, and methodologies that drive collaboration between development and operations teams.",
            "Implement Continuous Integration (CI) and Continuous Deployment (CD): Set up Jenkins and Azure Pipelines to automate code integration and deployment processes.",
            "Version Control with Git and SVN: Learn to manage source code using Git, handle branches, merges, and conflicts, and apply best practices for version control.",
            "Containerize Applications Using Docker: Understand Docker concepts, work with Docker images, and deploy containers in cloud environments.",
            "Use Configuration Management Tools: Automate system configuration using tools like Puppet and Ansible for infrastructure management.",
            "Orchestrate Containers with Kubernetes: Learn how to deploy and manage containers using Kubernetes and YAML files for automation.",
            "Monitor Systems with Nagios: Gain expertise in monitoring resources and system performance using Nagios and its plugins.",
            "Automate Infrastructure with Terraform: Learn Infrastructure as Code (IaC) using Terraform to automate the provisioning of cloud infrastructure on Azure.",
            "Leverage Azure DevOps Tools: Use Azure DevOps for source code management, testing, build automation, release pipelines, and agile project management."
        ],
        curriculum: [
            {
                day: "Introduction to Microsoft Azure",
                topics: [
                    "Introduction to cloud computing",
                    "What is Microsoft Azure?",
                    "Microsoft Azure Services",
                    "Creating a Microsoft Azure Account",
                    "Azure CLI, Azure PowerShell",
                    "Managing Azure Resources & Subscriptions",
                    "Azure Resource Manager",
                    "Microsoft Azure Architecture"
                ]
            },
            {
                day: "Linux Basics",
                topics: [
                    "Linux Installation",
                    "Unix Command Line",
                    "Distribution List",
                    "Directory structure",
                    "File System and File Management",
                    "User Administration",
                    "VI editor",
                    "Configure and monitor system logs",
                    "Service and process management",
                    "Package Management",
                    "Searching tool grep, find, locate",
                    "Text processing tools awk, cut, sort, uniq"
                ]
            },
            {
                day: "Shell Scripting",
                topics: [
                    "Variables and it's types",
                    "If conditions",
                    "For loops",
                    "While loops",
                    "Use cases",
                    "Real time Scenarios with examples"
                ]
            },
            {
                day: "Introduction to DevOps",
                topics: [
                    "What is Software Development",
                    "Software Development Life Cycle",
                    "Traditional Models for SDLC",
                    "Why DevOps?",
                    "What is DevOps?",
                    "DevOps Lifecycle",
                    "DevOps Tools"
                ]
            },
            {
                day: "Continuous Testing (Maven)",
                topics: [
                    "What is Continuous Testing?",
                    "What is Maven?",
                    "Running Test Cases on Chromium Web Driver",
                    "What is Headless Mode?"
                ]
            },
            {
                day: "Continuous Integration using Jenkins",
                topics: [
                    "Introduction to Continuous Integration",
                    "Jenkins Master Slave Architecture",
                    "Understanding CI/CD Pipelines",
                    "Creating an end to end automated CI/CD Pipeline"
                ]
            },
            {
                day: "Software Version Control",
                topics: [
                    "What is Version Control?",
                    "Types of Version Control System",
                    "Introduction to SVN",
                    "Introduction to Git",
                    "Git Lifecycle",
                    "Common Git Commands",
                    "Working with Branches in Git",
                    "Merging Branches",
                    "Resolving Merge Conflicts",
                    "Git Workflow"
                ]
            },
            {
                day: "Continuous Deployment: Containerization with Docker",
                topics: [
                    "Introduction to Docker",
                    "Understanding Docker Lifecycle",
                    "Components of Docker Ecosystem",
                    "Common Docker Operations",
                    "Creating a DockerHub Account",
                    "Committing changes in a Container",
                    "Pushing a Container Image to DockerHub",
                    "Creating Custom Docker Images using Dockerfile"
                ]
            },
            {
                day: "Configuration Management using Puppet",
                topics: [
                    "Need of Configuration Management",
                    "Configuration Management Tools",
                    "What is Puppet",
                    "Puppet Architecture",
                    "Setting up Master Slave using Puppet",
                    "Puppet Manifests",
                    "Puppet Modules",
                    "Applying configuration using Puppet",
                    "Puppet File Server"
                ]
            },
            {
                day: "Configuration Management using Ansible",
                topics: [
                    "What is Ansible?",
                    "Ansible vs Puppet",
                    "Ansible Architecture",
                    "Setting up Master Slave using Ansible",
                    "Ansible Playbook",
                    "Ansible Roles",
                    "Applying configuration using Ansible"
                ]
            },
            {
                day: "Continuous Orchestration using Kubernetes",
                topics: [
                    "Introduction to Kubernetes",
                    "Docker Swarm vs Kubernetes",
                    "Kubernetes Architecture",
                    "Deploying Kubernetes using Kubeadms",
                    "Alternate ways of deploying Kubernetes",
                    "YAML Files",
                    "Creating a Deployment in Kubernetes using YAML",
                    "Services in Kubernetes",
                    "Ingress in Kubernetes",
                    "Case Study – Kubernetes Architecture"
                ]
            },
            {
                day: "Continuous Monitoring using Nagios",
                topics: [
                    "What is Continuous Monitoring?",
                    "Introduction to Nagios",
                    "Nagios Architecture",
                    "Monitoring Services in Nagios",
                    "What are NRPE Plugins?",
                    "Monitoring System Info using NRPE plugins"
                ]
            },
            {
                day: "Terraform Modules & Workspaces",
                topics: [
                    "What is Infrastructure as a code",
                    "IaC vs Configuration Management",
                    "Introduction to Terraform",
                    "Installing Terraform on Azure",
                    "Basic Operations in Terraform",
                    "Terraform Code Basics",
                    "Deploying and end-to-end architecture on Azure using Terraform"
                ]
            },
            {
                day: "Azure DevOps and Azure Repos",
                topics: [
                    "Azure devops architecture",
                    "Key features",
                    "Azure devOps tools",
                    "Azure devOps organizations and projects",
                    "Introduction to Azure Repos",
                    "Compare TFVC and Git",
                    "Key concepts in azure repos",
                    "Search your code in Repos",
                    "What is TFVC?",
                    "Azure Repos Integrations"
                ]
            },
            {
                day: "Azure Artifacts and Azure Test Plans",
                topics: [
                    "What are Azure artifacts?",
                    "Key concepts in artifacts",
                    "Working with packages",
                    "Feeds",
                    "Views and upstream sources",
                    "Connecting to azure pipelines",
                    "What are Azure test plans?",
                    "Exploratory and manual testing",
                    "Test from kanban board",
                    "Creating Test Plans",
                    "Testing web apps"
                ]
            },
            {
                day: "Azure Pipelines",
                topics: [
                    "What is Azure Pipelines?",
                    "Why use Azure Pipelines?",
                    "Deploying to Azure",
                    "Key concepts in Pipelines",
                    "CI Triggers in pipelines",
                    "YAML Basics",
                    "Ecosystems and Integration",
                    "Setting up CI build",
                    "Adding Tests to the Pipeline",
                    "Agents and Tasks"
                ]
            },
            {
                day: "Azure Boards",
                topics: [
                    "What is Azure Boards?",
                    "Why use azure boards?",
                    "Agile project management best practices",
                    "Basic concepts of Azure Boards",
                    "Connecting boards to github",
                    "Work items",
                    "Kanban boards",
                    "Sprints",
                    "Scrum and plans",
                    "Azure Boards integrations"
                ]
            }
        ],        
        targetAudience: [
            "DevOps Engineers looking to enhance their knowledge and skills in Azure DevOps.",
            "Software Developers aim to understand and implement continuous integration and continuous delivery (CI/CD) pipelines.",
            "Cloud Engineers and System Administrators want to manage infrastructure on Azure and automate deployment processes.",
            "IT Professionals transitioning to cloud-based DevOps practices.",
            "Individuals Preparing for the AZ-400 Certification who wish to gain hands-on experience and in-depth knowledge of Azure DevOps tools and practices.",
            "Agile Project Managers and Team Leads who want to better understand DevOps workflows and tools for managing development and operations teams.",
            "prerequisites: Some basic familiarity with cloud computing, software development, and Linux is recommended.",
        ],
        
                
        courseBenefits: [
            "Comprehensive Coverage of DevOps: Gain expertise in key DevOps practices, from CI/CD to container orchestration, monitoring, and infrastructure automation.",
            "Hands-on Experience: Practical labs and exercises with real-world scenarios to reinforce learning.",
            "Certified Exam Preparation: Prepare for the AZ-400 certification exam with detailed coverage of exam objectives and best practices.",
            "Industry-Relevant Skills: Acquire skills with the latest tools and technologies used by leading organizations in the cloud computing and DevOps spaces.",
            "Increased Efficiency: Learn how to streamline software development and deployment processes with automated pipelines, version control, and continuous monitoring.",
            "Career Advancement: Enhance your career prospects with expertise in Azure DevOps, a high-demand field in IT and cloud computing.",
            "Improved Collaboration: Master DevOps workflows that foster collaboration between development, operations, and testing teams."
        ],
        
        courseCompletion: "Upon successful completion of the Microsoft Azure DevOps (AZ-400) course, participants will receive a Course Completion Certificate in Microsoft Azure DevOps. This certificate signifies that the participant has gained the necessary skills to work with Azure DevOps tools and practices, providing them with the knowledge to efficiently implement DevOps in cloud environments. The certificate can be added to resumes, LinkedIn profiles, and portfolios to demonstrate proficiency in Azure DevOps."
    },
    // {
    //     name: "Clinical Research",
    //     category: "Other",
    //     summary: "Gain expertise in designing and conducting clinical trials and research studies.",
    //     image: "./assets/images/clinical-research.png",
    // },
    {
        name: "Cybersecurity Analysis",
        category: "Security",
        duration: "45 days",
        summary: "Develop skills to protect systems and networks from digital attacks.",
        image: "./assets/images/cybersecurity.PNG",
        price: "1,500",
        description: "The Governance, Risk, and Compliance (GRC) Training Program is a comprehensive, multi-level curriculum designed to equip professionals with the knowledge and practical skills needed to implement, manage, and optimize GRC practices in modern organizations. Covering governance frameworks, risk assessment methodologies, compliance standards, audits, cybersecurity, and automation, the program is structured into four progressive levels—from beginner to advanced—ensuring a clear learning path for all participants.",
        courseObjectives: [
            "Understand the foundational concepts of Governance, Risk, and Compliance.",
            "Apply governance frameworks and risk management strategies in organizational contexts.",
            "Interpret and implement key compliance standards and regulatory frameworks (ISO 27001, NIST, GDPR, HIPAA, etc.).",
            "Conduct risk assessments, audits, and vendor evaluations effectively.",
            "Design and deploy policies, awareness programs, and incident response protocols.",
            "Utilize GRC tools and platforms for automation, monitoring, and reporting.",
            "Align GRC strategies with business goals and emerging technologies."
        ],

        curriculum: [
            {
                day: "Fundamentals of GRC",
                topics: [
                    "What is GRC?",
                    "Importance of GRC in an organization",
                    "Key components of GRC: Governance, Risk Management, Compliance",
                    "Role of a GRC professional",
                    "Introduction to Governance",
                    "Introduction to Risk Management",
                    "Introduction to Compliance",
                    "Regulatory Landscape Overview"
                ]
            },
            {
                day: "Level 1: Foundation in GRC",
                // goal: "Learn about risk assessment, governance structures, and compliance frameworks.",
                topics: [
                    "Deep Dive into Governance",
                    "Risk Management Fundamentals",
                    "Compliance Frameworks (ISO 27001, NIST CSF, HIPAA, GDPR, PCI DSS)",
                    "Controls & Audits",
                    "Security Awareness & Training"
                ]
            },
            {
                day: "Level 2: Intermediate GRC",
                // goal: "Apply risk and compliance frameworks in real-world scenarios.",
                topics: [
                    "Advanced Governance & Policies",
                    "Risk Management Lifecycle",
                    "Compliance Frameworks & Auditing",
                    "Data Privacy & Protection Laws",
                    "Security Operations & Incident Response",
                    "Vendor Risk Management"
                ]
            },
            {
                day: "Level 3: Advanced GRC",
                // goal: "Master advanced risk analysis, regulatory compliance, and security governance.",
                topics: [
                    "Enterprise Risk Management (ERM)",
                    "Cybersecurity Compliance Management",
                    "Digital Forensics & Investigations",
                    "Business Continuity & Disaster Recovery (BC/DR)",
                    "Ethical Hacking for GRC",
                    "GRC Automation & AI-Driven Compliance"
                ]
            }
        ],
        targetAudience: [
            "Aspiring GRC professionals seeking foundational knowledge",
            "IT and cybersecurity professionals aiming to expand into governance and compliance",
            "Risk managers, auditors, and compliance officers",
            "Executives and board members involved in governance and risk oversight",
            "Legal and data privacy professionals",
            "Consultants providing risk, security, or compliance advisory services",
            "Students and recent graduates interested in cybersecurity and governance careers"
        ],

        courseBenefits: [
            "Structured learning across four levels (Beginner to Advanced)",
            "Exposure to real-world frameworks and tools",
            "Hands-on understanding of compliance laws and regulations",
            "Skills to conduct risk assessments, audits, and business continuity planning",
            "Knowledge in cybersecurity operations, digital forensics, and ethical hacking",
            "Experience with GRC automation and AI-driven compliance",
            "Career advancement opportunities in risk, compliance, and security management",
            "Readiness for industry certifications (CISA, CRISC, CISSP, ISO 27001 Lead Implementer)"
        ],

        
        courseCompletion: "Upon successful completion of each level, participants will receive a GRC Training Certificate. Participants who complete all four levels will be awarded a Comprehensive GRC Certification, which demonstrates a high level of competency in enterprise GRC strategy, implementation, and leadership.",
    },
    {
        name: "Data Science",
        category: "Data",
        duration: "90 Days",
        summary: "Use Python to analyze, visualize, and interpret complex data sets.",
        image: "./assets/images/datascience.jpg",
        price: "3,000",
        description: "The Data Science Course offers a structured, hands-on learning experience designed to equip participants with the necessary skills to analyze data, build predictive models, and solve complex problems using data science techniques. This course covers key topics like Python programming, data manipulation with Pandas, data visualization, machine learning, deep learning, time series analysis, NLP, and model deployment. Learners will work with real-world datasets, apply algorithms, and build solutions that will prepare them for data science roles in various industries. Throughout the program, you will develop a deep understanding of data wrangling, statistical analysis, model evaluation, and deployment techniques. By the end of the course, you will be able to confidently apply data science techniques to solve real-world problems and create a comprehensive data science portfolio.",
        courseObjectives: [
            "Master Key Data Science Tools: Proficiently use Python, R, and SQL for data manipulation, analysis, and database management.",
            "Perform Data Cleaning and Preprocessing: Handle missing data, outliers, and categorical variables, and perform necessary transformations to make the data ready for analysis.",
            "Understand and Apply Machine Learning Algorithms: Implement both supervised and unsupervised learning algorithms (e.g., linear regression, decision trees, clustering) using Scikit-learn.",
            "Develop Deep Learning Models: Work with deep learning frameworks such as TensorFlow and PyTorch to create neural networks and deploy models.",
            "Visualize Data Effectively: Create meaningful visualizations and dashboards using tools like Matplotlib, Seaborn, and Tableau/Power BI to present insights.",
            "Analyze Time Series Data: Apply techniques such as ARIMA, SARIMA, and Prophet for time series forecasting.",
            "Tackle Real-World Problems: Solve practical problems using real-world datasets and build end-to-end projects.",
            "Deploy Machine Learning Models: Learn how to deploy models using Flask, Django, and cloud platforms (AWS, Azure, GCP).",
            "Build a Professional Portfolio: Document your projects, create a GitHub portfolio, and enhance your LinkedIn and resume for career advancement.",
        ],
        curriculum: [
            {
                day: "Weeks 1 - 2: Introduction and Basics",
                topics: [
                    "Day 1-2: Introduction to Data Science",
                    "Overview of Data Science and applications.",
                    "Key tools and technologies (Python, R, SQL).",
                    "Day 3-4: Python Basics for Data Science",
                    "Variables, data types, conditionals, loops, functions.",
                    "Libraries: NumPy, Pandas.",
                    "Day 5-6: Data Manipulation with Pandas",
                    "DataFrames, indexing, filtering.",
                    "Aggregations, merging, reshaping.",
                    "Day 7-8: Exploratory Data Analysis (EDA)",
                    "Data visualization (Matplotlib, Seaborn).",
                    "Handling missing data, outliers, and data distributions.",
                    "Day 9-10: Statistics Fundamentals",
                    "Descriptive statistics (mean, median, mode, variance, standard deviation).",
                    "Probability concepts, distributions (Normal, Poisson, Binomial).",
                    "Day 11-12: Introduction to SQL",
                    "SELECT, INSERT, UPDATE, DELETE queries.",
                    "Joins, subqueries, and aggregations.",
                    "Day 13-14: Python for Data Cleaning",
                    "Handling missing values, scaling, encoding categorical data.",
                    "Regular expressions and string operations.",
                ]
            },
            {
                day: "Weeks 3 - 4: Data Visualization and Basic Machine Learning",
                topics: [
                    "Day 15-16: Advanced Visualization",
                    "Creating impactful visualizations with Seaborn and Plotly.",
                    "Dashboard creation (Tableau/Power BI basics).",
                    "Day 17-18: Linear Algebra and Matrices",
                    "Vectors, matrices, and matrix operations.",
                    "Applications in machine learning.",
                    "Day 19-21: Introduction to Machine Learning",
                    "Supervised vs. unsupervised learning.",
                    "Scikit-learn basics.",
                    "Day 22-24: Linear Regression",
                    "Simple and multiple regression.",
                    "Metrics: RMSE, R².",
                    "Day 25-28: Classification Models",
                    "Logistic Regression, Decision Trees.",
                    "Model evaluation (confusion matrix, precision, recall, F1-score).",
                ]
            },
            {
                day: "Weeks 5 - 6: Intermediate Machine Learning",
                topics: [
                    "Day 29-31: Feature Engineering",
                    "Feature selection, extraction, and transformation.",
                    "PCA, dimensionality reduction techniques.",
                    "Day 32-34: Ensemble Methods",
                    "Random Forest, Gradient Boosting (XGBoost, LightGBM).",
                    "Bagging vs. Boosting.",
                    "Day 35-37: Clustering",
                    "K-means, Hierarchical Clustering.",
                    "DBSCAN, evaluation metrics (silhouette score).",
                    "Day 38-40: Natural Language Processing (NLP) Basics",
                    "Tokenization, stemming, lemmatization.",
                    "Bag-of-words, TF-IDF.",
                    "Day 41-42: Advanced Regression and Classification",
                    "Polynomial regression, Ridge, Lasso.",
                    "SVMs and kernel tricks.",
                ],
            },
            {
                day: "Weeks 7-8: Deep Learning and Time Series",
                topics: [
                    "Day 43-46: Introduction to Deep Learning",
                    "Neural Networks, activation functions.",
                    "Frameworks (TensorFlow, PyTorch).",
                    "Day 47-49: Convolutional Neural Networks (CNNs)",
                    "Image processing and recognition tasks.",
                    "Day 50-52: Recurrent Neural Networks (RNNs)",
                    "Sequence data, LSTMs, GRUs.",
                    "Day 53-54: Time Series Analysis",
                    "ARIMA, SARIMA, seasonal decomposition.",
                    "Forecasting with Prophet.",
                    "Day 55-56: Deployment Basics",
                    "Flask/Django for deploying models.",
                    "Introduction to cloud platforms (AWS, GCP, Azure).",
                ],
            },
            {
                day: "Weeks 9-10: Advanced Topics and Projects",
                topics: [
                    "Day 57-60: Big Data",
                    "· Hadoop, Spark, and data pipelines.",
                    "· Working with large datasets.",
                    "Day 61-63: Advanced NLP",
                    "· Transformers, BERT, GPT.",
                    "· Sentiment analysis, text summarization.",
                    "Day 64-66: Reinforcement Learning",
                    "· Markov Decision Processes, Q-learning.",
                    "Day 67-70: Model Deployment and Optimization",
                    "· MLOps basics.",
                    "· Hyperparameter tuning with Grid Search, Randomized Search.",
                ],
            },
            {
                day: "Weeks 11-12: Final Projects and Case Studies",
                topics: [
                    "Day 71-75: End-to-End Project (1)",
                    "· Data collection, cleaning, and exploratory analysis.",
                    "· Machine learning model building, evaluation, and deployment.",
                    "Day 76-80: End-to-End Project (2)",
                    "· Focus on time series, NLP, or advanced deep learning.",
                    "Day 81-85: Real-World Case Studies",
                    "· Kaggle competitions, publicly available datasets.",
                    "Day 86-90: Final Revision and Portfolio Building",
                    "· Prepare documentation, resumes, and LinkedIn profiles.",
                    "· Presentation of projects and interview preparation.",
                ],
            },
        ],
        targetAudience: [
            "Aspiring Data Scientists: Individuals seeking to transition into the data science field.",
            "Software Engineers: Developers interested in expanding their knowledge of data science and machine learning.",
            "Business Analysts: Professionals who want to leverage data science to make informed business decisions.",
            "Mathematicians/Statisticians: Those with a strong mathematical background who wish to apply their skills in data analysis and machine learning.",
            "Graduates and Researchers: Individuals with a technical background looking to specialize in data science and machine learning.",
            "Professionals Looking to Upskill: Data professionals or analysts who want to enhance their existing skills to work on more complex projects.",
            "prerequisites: Basic programming knowledge in Python and foundational mathematics (statistics and algebra).",

        ],
        courseBenefits: [ 
            "Comprehensive Knowledge: Gain deep insights into essential data science concepts, from data manipulation to advanced machine learning and deep learning techniques.",
            "Hands-On Experience: Work with real datasets and build end-to-end data science projects that simulate real-world tasks.",
            "Exposure to Industry Tools: Master the tools and frameworks widely used in the industry such as TensorFlow, PyTorch, Scikit-learn, Flask, and cloud platforms like AWS, Azure, and GCP.",
            "Job-Ready Skills: Learn how to apply machine learning algorithms, visualize data effectively, and deploy models, preparing you for roles like Data Scientist, Machine Learning Engineer, and Business Intelligence Analyst.",
            "Portfolio Building: Complete practical projects that demonstrate your data science skills, which can be showcased to potential employers.",
            "Flexible Learning Path: A structured learning path that combines theoretical understanding with practical, hands-on experience.",
            "Expert Guidance: Learn from experienced data scientists who provide real-world insights and guidance.",
            "Career Advancement: Equip yourself with in-demand skills that will make you more competitive in the job market and prepare you for advanced data science and AI roles.",
        ],
        courseCompletionCertificate: "Upon successful completion of the Data Science 3-Month Course, participants will receive a Certificate of Completion. This certificate will validate your proficiency in data science concepts, tools, and techniques, enhancing your qualifications for data-related roles such as Data Scientist, Data Analyst, Machine Learning Engineer, and Business Intelligence Analyst",
    },
    {
        name: "Ethical Hacking",
        category: "Security",
        duration: "45 Days",
        summary: "Master the art of ethical hacking to test system security.",
        image: "./assets/images/ethical.jpg",
        price: "1,350",
        description: "This comprehensive course provides an in-depth, hands-on approach to Ethical Hacking based on the core principles of the Certified Ethical Hacker (CEH) framework. Participants will learn to think like attackers to better protect systems and networks. The training walks learners through the entire ethical hacking process—from reconnaissance and vulnerability analysis to exploitation and reporting. Real-world scenarios and tools are used to simulate common cyber threats.",
        courseObjectives: [
            "Understand the ethical, legal, and professional aspects of hacking.",
            "Identify and exploit vulnerabilities in systems, networks, and applications.",
            "Use reconnaissance and scanning tools to gather intelligence on targets.",
            "Execute advanced system hacking, privilege escalation, and data exfiltration techniques.",
            "Analyze and mitigate malware threats including ransomware and trojans.",
            "Perform social engineering simulations such as phishing and impersonation.",
            "Launch and defend against denial-of-service and session hijacking attacks.",
            "Apply evasive techniques to bypass IDS, firewalls, and honeypots.",
            "Hack and secure Linux, Windows, web applications, and wireless networks.",
            "Understand and apply encryption techniques to ensure data confidentiality.",
            "Perform vulnerability assessments and penetration testing (VAPT) with proper documentation.",
            "Utilize foundational programming skills in Python, JavaScript, and SQL for automation and exploitation.",
            "Gain familiarity with securing cloud platforms and IoT devices.",
            "Collaborate with SOC and infrastructure teams in real-world security operations."
        ],
        curriculum: [
            {
                day: "Ethical Hacking Fundamentals",
                topics: [
                    "Introduction to ethical hacking",
                    "Understanding the hacker mindset",
                    "Legal aspects and frameworks"
                ]
            },
            {
                day: "Footprinting and Reconnaissance",
                topics: [
                    "Techniques for information gathering",
                    "Using tools for footprinting",
                    "Identifying potential targets"
                ]
            },
            {
                day: "Scanning Networks",
                topics: [
                    "Network scanning techniques",
                    "Identifying live systems and open ports",
                    "Vulnerability scanning"
                ]
            },
            {
                day: "Enumeration",
                topics: [
                    "Gathering detailed information about the target",
                    "Extracting user names, machine names, network resources",
                    "Tools for enumeration"
                ]
            },
            {
                day: "Vulnerability Analysis",
                topics: [
                    "Identifying security weaknesses",
                    "Assessing potential threats",
                    "Prioritizing vulnerabilities"
                ]
            },
            {
                day: "System Hacking",
                topics: [
                    "Techniques for system penetration",
                    "Password cracking and privilege escalation",
                    "Covering tracks"
                ]
            },
            {
                day: "Malware Threats",
                topics: [
                    "Understanding different types of malware",
                    "Methods of malware propagation",
                    "Detection and removal techniques"
                ]
            },
            {
                day: "Sniffing",
                topics: [
                    "Capturing and analyzing network traffic",
                    "Tools for sniffing",
                    "Countermeasures against sniffing"
                ]
            },
            {
                day: "Social Engineering",
                topics: [
                    "Psychological manipulation techniques",
                    "Phishing attacks",
                    "Preventing social engineering attacks"
                ]
            },
            {
                day: "Denial-of-Service (DoS) Attacks",
                topics: [
                    "Techniques for launching DoS attacks",
                    "Tools for DoS attacks",
                    "Mitigating DoS attacks"
                ]
            },
            {
                day: "Session Hijacking",
                topics: [
                    "Techniques for session hijacking",
                    "Identifying vulnerable sessions",
                    "Prevention strategies"
                ]
            },
            {
                day: "Evading IDS, Firewalls, and Honeypots",
                topics: [
                    "Techniques to bypass security measures",
                    "Evading intrusion detection systems",
                    "Defeating firewalls and honeypots"
                ]
            },
            {
                day: "Hacking Linux & Windows Servers",
                topics: [
                    "Exploiting server vulnerabilities",
                    "Gaining access and control",
                    "Securing compromised servers"
                ]
            },
            {
                day: "Hacking Web Applications",
                topics: [
                    "Identifying web application vulnerabilities",
                    "Techniques for exploiting web applications",
                    "Preventing web application attacks"
                ]
            },
            {
                day: "SQL Injection",
                topics: [
                    "Understanding SQL injection attacks",
                    "Techniques for exploiting SQL vulnerabilities",
                    "Prevention strategies"
                ]
            },
            {
                day: "Hacking Wireless Networks",
                topics: [
                    "Techniques for hacking wireless networks",
                    "Tools for wireless network attacks",
                    "Securing wireless networks"
                ]
            },
            {
                day: "Hacking Mobile Platforms",
                topics: [
                    "Understanding mobile platform vulnerabilities",
                    "Techniques for exploiting mobile devices",
                    "Securing mobile platforms"
                ]
            },
            {
                day: "Cryptography – Encryptions",
                topics: [
                    "Basics of cryptography",
                    "Implementing encryption techniques",
                    "Breaking encryption algorithms"
                ]
            },
            {
                day: "Cloud Security",
                topics: [
                    "Understanding cloud computing threats",
                    "Techniques for securing cloud environments",
                    "Tools for cloud security"
                ]
            },
            {
                day: "IoT Security",
                topics: [
                    "Identifying IoT vulnerabilities",
                    "Techniques for securing IoT devices",
                    "Implementing IoT security best practices"
                ]
            },
            {
                day: "Bitkavach – Exclusive Modules",
                topics: [
                    "Basic Understanding of Python Language",
                    "Basic Understanding of JavaScript",
                    "Basic Understanding of SQL",
                    "Security Aspects of Windows",
                    "Real-Time Aspects of Offensive Security",
                    "VAPT – Creating Reports"
                ]
            }
        ],
        targetAudience: [
            "Beginners and entry-level professionals in IT or cybersecurity",
            "Network and system administrators seeking to enhance security awareness",
            "SOC analysts transitioning into red teaming or offensive roles",
            "Ethical hackers and bug bounty hunters",
            "Students pursuing cybersecurity careers or certifications (e.g., CEH, OSCP)",
            "Anyone interested in hands-on, real-world security testing skills"
        ],

        courseBenefits: [
            "CEH-Aligned Curriculum: Based on EC-Council's CEH exam topics and structure",
            "Hands-On Offensive Security: Real-world attack simulations and tools",
            "Practical Skill Building: Master techniques like enumeration, exploitation, sniffing, and privilege escalation",
            "Beginner-Friendly Onboarding: Includes programming basics (Python, JS, SQL)",
            "Bitkavach Exclusive Modules: Real-time exercises in offensive security operations",
            "VAPT Report Writing: Learn to document findings like a professional consultant",
            "Multi-Platform Coverage: Includes Linux, Windows, Web, Wireless, Mobile, Cloud, and IoT",
            "Experienced Mentorship: Learn from industry experts with real-world offensive security experience",
            "Flexible Delivery: Available in both classroom and online modes"
        ],

        courseCompletion: "This certificate will validate your proficiency in Ethical Hacking concepts, tools, and techniques, enhancing your qualifications for related roles such as Enumeration, Exploitation, Sniffing, Technical Security Capabilities and Privilege Escalation.",
    },
    {
        name: "GenAI",
        category: "AI",
        duration: "2 Months",
        summary: "Explore generative AI models and their applications across industries.",
        image: "./assets/images/genai.png",
        price: "1,500",
        description: "The Generative AI course offers a comprehensive journey into the world of advanced artificial intelligence, focusing on the generation of new, unseen data through powerful models like Generative Adversarial Networks (GANs), Variational Autoencoders (VAEs), and Transformer-based models (including GPT). Over 60 days, you will explore the theoretical foundations, practical applications, and advanced topics in generative AI, gaining hands-on experience with models used to generate text, images, audio, and even 3D models. This course is ideal for professionals and students who want to deepen their understanding of generative AI and apply it in real-world scenarios such as healthcare, creative arts, and data augmentation.",
        courseObjectives: [
            "1.	Understand Generative AI: Learn the core principles behind generative models and the distinctions between discriminative and generative models.",
            "Develop Deep Learning Models: Gain hands-on experience building and training neural networks and generative models such as GANs and VAEs.",
            "Master Advanced Generative Models: Understand and apply advanced models like Deep Convolutional GANs (DCGANs), Conditional GANs (cGANs), and transformers like GPT for text generation.",
            "Create Multimodal Systems: Learn how to integrate multiple types of data (text, image, audio) to build sophisticated generative models.",
            "Implement Real-World Applications: Work on industry-relevant applications such as image-to-image translation, music generation, and healthcare data generation.",
            "Apply Optimization Techniques: Understand how to scale, fine-tune, and optimize generative models for real-world deployment.",
            "Ethical AI Practices: Learn about the ethical considerations, including biases and fairness in generative models, and how to address them."
        ],
        curriculum: [
            {
                day: "Day 1: Introduction to AI and Generative AI",
                topics: [
                    "Overview of AI and Machine Learning",
                    "What is Generative AI?",
                    "Applications of Generative AI",
                    "Key differences between Discriminative and Generative models",
                    "Overview of GANs, VAEs, and Transformer-based models"
                ]
            },
            {
                day: "Day 2: Basics of Deep Learning",
                topics: [
                    "Introduction to Neural Networks",
                    "Perceptron and Feedforward Networks",
                    "Activation Functions (ReLU, Sigmoid, Tanh)",
                    "Loss functions and Optimization (Gradient Descent)",
                    "Backpropagation and training process"
                ]
            },
            {
                day: "Day 3: Neural Network Architectures",
                topics: [
                    "Multilayer Perceptron (MLP)",
                    "CNNs: Convolutional Neural Networks",
                    "RNNs: Recurrent Neural Networks",
                    "LSTMs and GRUs (for sequence data)",
                    "Intro to Autoencoders"
                ]
            },
            {
                day: "Day 4: Introduction to Generative Models",
                topics: [
                    "Overview of Generative Models",
                    "Probabilistic vs. Deterministic Models",
                    "Importance of Likelihood, Distribution, and Sampling",
                    "Variational Inference and Maximum Likelihood Estimation"
                ]
            },
            {
                day: "Day 5: Mathematical Foundation for Generative AI",
                topics: [
                    "Probability theory basics",
                    "Bayes’ Theorem",
                    "Latent Variable Models",
                    "Entropy, KL Divergence, and Jensen’s Inequality",
                    "Basic linear algebra (Matrix operations, Eigenvalues, Singular Value Decomposition)"
                ]
            },
            {
                day: "Day 6: GANs - Part 1",
                topics: [
                    "What are GANs?",
                    "Architecture: Generator and Discriminator",
                    "The adversarial training processes.",
                    "Loss functions in GANs",
                    "First introduction to simple GANs"
                ]
            },
            {
                day: "Day 7: GANs - Part 2",
                topics: [
                    "Training challenges (Mode collapse, Non-convergence)",
                    "Techniques to stabilize training (WGAN, LSGAN)",
                    "Applications of GANs (image generation, text-to-image, etc.)",
                    "Hands-on with a simple GAN in PyTorch or TensorFlow"
                ]
            },
            {
                day: "Day 8: Variational Autoencoders (VAEs)",
                topics: [
                    "What are VAEs?",
                    "Architecture and components of VAE",
                    "Encoder-Decoder architecture",
                    "Variational Inference in VAEs",
                    "Differences between GANs and VAEs"
                ]
            }
        ],
        targetAudience: [
            "AI Researchers and Developers: Individuals looking to specialize in generative AI and machine learning.",
            "Data Scientists and Engineers: Those interested in expanding their expertise in generative models for practical applications.",
            "Creative Professionals: Artists, musicians, and designers who want to integrate AI into their creative workflows.",
            "Students: Learners with a basic understanding of machine learning who wish to delve deeper into generative AI.",
            "Entrepreneurs and Product Managers: Individuals interested in exploring how generative AI can be leveraged in business and technology products."
        ],
        courseBenefits: [
            "Comprehensive Learning: Gain a strong understanding of both foundational and advanced concepts in generative AI.",
            "Hands-on Experience: Implement and experiment with state-of-the-art tools and frameworks (TensorFlow, PyTorch) to build generative models.",
            "Real-World Applications: Work on real-world projects and case studies, including image generation, text-to-image models, and music synthesis.",
            "Industry-Relevant Skills: Learn to build and deploy generative models in various domains such as healthcare, gaming, creative arts, and more.",
            "Ethical Awareness: Understand the ethical concerns related to generative AI, including bias and deepfakes, and learn techniques to mitigate these issues.",
            "Capstone Project: Build a final project based on your learnings, showcasing your skills and knowledge.",
            "Career Advancement: Enhance your career prospects with expertise in one of the most sought-after areas in AI today."
        ],
        courseCompletion: "Upon successfully completing the Generative AI course, participants will receive a Course Completion Certificate. This certificate demonstrates proficiency in generative AI, covering model development, training, optimization, and ethical considerations. The certificate will serve as a valuable addition to your professional portfolio, showcasing your ability to create and deploy generative AI models across various real-world scenarios. The certificate can be shared on professional platforms like LinkedIn, included in resumes, and used to demonstrate your expertise to potential employers or collaborators in the field of AI."
    },
    {
        name: "Penetration Testing",
        category: "Security",
        duration: "60 Days",
        summary: "Learn penetration testing techniques to identify system vulnerabilities.",
        image: "./assets/images/penetration.jpg",
        price: "1,200",
        description: "This hands-on course offers a deep dive into the techniques and methodologies used in network penetration testing. Participants will learn to simulate real-world cyberattacks to uncover security vulnerabilities in networks and systems. Covering the entire penetration testing lifecycle—from reconnaissance to reporting—the course equips learners with the practical skills and tools used by ethical hackers and security professionals to assess and strengthen network defenses.",
        courseObjectives: [
            "Understand the principles and ethical boundaries of penetration testing.",
            "Perform reconnaissance and information gathering using both passive and active methods.",
            "Scan and enumerate networks to identify live hosts, open ports, and running services.",
            "Conduct vulnerability assessments and exploit known security flaws in network services.",
            "Utilize frameworks such as Metasploit for automated and manual exploitation.",
            "Execute post-exploitation tasks such as privilege escalation, lateral movement, and data exfiltration.",
            "Assess and compromise wireless networks using modern tools and techniques.",
            "Develop professional penetration testing reports including risk ratings and remediation strategies.",
        ],
        curriculum: [
            {
                day: "Module 1: Introduction to Network Penetrating",
                topics: [
                    "What is Network Penetrating?",
                    "Ethical Hacking and Legal Considerations.",
                    "Types of Network Attacks",
                    "Lab Setup and Tools Installation.",
                ],
            },
            {
                day: "Module 2: Reconnaissance and Foot printing",
                topics: [
                    "Passive and Active Reconnaissance.",
                    "WHOIS and DNS Interrogation.",
                    "Google Hacking and OSINT.",
                    "Using tools like Maltego and Recon-ng.",
                ],
            },
            {
                day: "Module 3: Scanning and Enumeration",
                topics: [
                    "Network Scanning Techniques (Ping, TCP, UDP)",
                    "Port Scanning with Nmap",
                    "Service Enumeration (NetBIOS, SNMP, SMB)",
                    "Banner Grabbing and OS Detection",
                ],
            },
            {
                day: "Module 4: Vulnerability Assessment",
                topics: [
                    "Using Vulnerability Scanners (Nessus, OpenVAS)",
                    "Manual Testing Techniques",
                    "Exploiting Known Vulnerabilities (CVE usage)",
                ],
            },
            {
                day: "Module 5: Exploitation Techniques",
                topics: [
                    "Common Exploits (SMB, RDP, FTP, etc.)",
                    "Exploit Development Basics",
                    "Metasploit Framework Usage",
                    "Password Cracking and Brute Forcing.",
                ],
            },
            {
                day: "Module 6: Post-Exploitation",
                topics: [
                    "Maintaining Access",
                    "Pivoting and Lateral Movement.",
                    "Data Exfiltration Techniques",
                    "Clearing Logs and Covering Tracks.",
                ],
            },
            {
                day: "Module 7: Wireless Network Pentesting",
                topics: [
                    "Wireless Security Fundamentals",
                    "WEP/WPA/WPA2 Attacks",
                    "Rogue AP and Evil Twin Attacks.",
                    "Wi-Fi Hacking Tools (Aircrack-ng, Kismet)",
                ],
            },
            {
                day: "Module 8: Reporting and Documentation",
                topics: [
                    "Writing Effective Reports",
                    "Remediation Strategies",
                    "Pentest Report Templates",
                    "Client Communication and Presentation",
                ],
            },
        ],
        targetAudience: [
            "Cybersecurity analysts and engineers",
            "Ethical hackers and red team professionals",
            "IT administrators and network security professionals",
            "Security consultants and auditors",
            "Students and enthusiasts pursuing a career in cybersecurity",
            "Anyone preparing for certifications like CEH, OSCP, or CompTIA PenTest+",
        ],
        courseBenefits: [
            "Hands-on Labs: Practice with real-world tools (Nmap, Metasploit, Wireshark, Aircrack-ng, Nessus, etc.) in a safe lab environment.",
            "Job-Ready Skills: Learn in-demand skills applicable to penetration testing, red teaming, and threat assessment roles.",
            "Industry-Relevant Tools: Exposure to open-source and enterprise-grade testing frameworks.",
            "Certification Preparation: Strengthens foundational knowledge for major ethical hacking and pentesting certifications.",
            "Real-World Reporting: Learn how to document findings and present professional pentest reports to clients or stakeholders.",
        ],
        courseCompletion: "This certificate verifies the learner’s understanding of penetration testing processes, tools, and ethical hacking methodologies. It may be used to showcase skills to employers, add to a resume or LinkedIn profile, or meet professional development requirements.",
    },
    {
        name: "Power BI",
        category: "Data",
        duration: "40 Days",
        summary: "Master data visualization with these powerful BI tools.",
        image: "./assets/images/powerbi-two.png",
        price: "1,200",
        description: "This comprehensive Power BI training course is designed to equip participants with the skills needed to harness the full potential of Microsoft's premier business intelligence tool. From understanding the core concepts of Business Intelligence to building interactive dashboards, automating reports, cleaning and transforming data with Power Query, and performing advanced analytics using DAX functions, this course covers it all. Whether you're just starting or looking to deepen your BI expertise, this hands-on program offers a complete learning path to become proficient in data modeling, visualization, and analytical reporting using Power BI.",
        courseObjectives: [
            "Understand the evolution and importance of Business Intelligence and how Power BI fits in.",
            "Navigate Power BI components including Power BI Desktop, Service, and Mobile.",
            "Connect, clean, and transform data from a wide variety of sources.",
            "Build and optimize interactive reports and dashboards using visual elements.",
            "Apply filters, slicers, hierarchies, and dynamic groupings for detailed analytics.",
            "Use Power Query for advanced data transformation and ETL operations.",
            "Write and apply DAX (Data Analysis Expressions) for creating calculated columns, measures, and aggregations.",
            "Automate and publish reports for seamless data-driven decision making.",
        ],
        curriculum: [
            {
                day: "WHY BUSINESS INTELLIGENCE?",
                topics: [
                    "The origins and growth of BI.",
                    "The role of BI today",
                    "The move from Enterprise to “Self-service” tools.",
                ],
            },
            {
                day: "THE POWER BI ELEMENTS",
                topics: [
                    "What is Power BI?",
                    "Why use Power BI - The simplification of complex reporting?",
                    "The parts of Power BI.",
                ],
            },
            {
                day: "GET STARTED WITH POWER BI",
                topics: [
                    "Benefits of Power BI workflow.",
                    "Visualizations, datasets and dashboards.",
                    "Getting your data ready.",
                    "Automating Reports.",
                ],
            },
            {
                day: "Understand Data and Power Tool",
                topics: [
                    "Prepare Data in Power BI.",
                    "Get Data from Various Data Sources.",
                    "Optimize Performance.",
                    "Resolve Data Errors.",
                ],
            },
            {
                day: "CLEANSING DATA",
                topics: [
                    "Clean, Transform, and Load Data in Power BI.",
                    "Data Shaping.",
                    "Enhance the Data Structure.",
                ],
            },
            {
                day: "WORKING WITH CHARTS",
                topics: [
                    "Power BI Desktop Installation.",
                    "Data Sources & Visual Types.",
                    "Canvas, Visualizations and Fields.",
                    "Table and Tree Map Visuals",
                    "Format Button and Data Labels",
                    "Legend, Category and Grid.",
                    "Visual Interaction, Data Points.",
                    "Edit Interactions - Format Options.",
                    "SPOTLIGHT & FOCUSMODE.",
                ],
            },
            {
                day: "VISUAL SYNC, GROUPING",
                topics: [
                    "Slicer Visual : Real-time Usage.",
                    "Orientation, Selection Properties.",
                    "Single & Multi Select, CTRL Options.",
                    "Slicer : Number, Text and Date Data.",
                    "Slicer List and Slicer Dropdowns.",
                    "Disabling Slicers, Clear Selections.",
                    "Grouping Dynamic / Changing Data.",
                ],
            },
            {
                day: "HIERARCHIES, FILTERS",
                topics: [
                    "Creating Hierarchies in Power BI.",
                    "Independent Drill-Down Options.",
                    "Drill Up Buttons and Operations.",
                    "Show Data and See Records.",
                    "Filters : Types and Usage.",
                    "Visual Filter, Page Filter, Report Filter.",
                    "Basic, Advanced and TOP N Filters.",
                    "Category and Summary Level Filters.",
                    "Drill Thru Filters",
                    "Cross Report Filters, Include, Exclude.",
                ],
            },
            {
                day: "VISUALIZATION PROPERTIES",
                topics: [
                    "Stacked Charts and Clustered Charts.",
                    "Line Charts, Area Charts, Bar Charts.",
                    "100% Stacked Bar & Column Charts.",
                    "Map Visuals: Tree, Filled, Bubble.",
                    "Cards, Funnel, Table, Matrix.",
                    "Scatter Chart : Play Axis, Labels.",
                    "Series Clusters & Selections.",
                    "Waterfall Chart.",
                    "Info graphics, Icons and Labels.",
                    "Column Series, Column Axis in Lines.",
                    "Shapes, Markers, Axis, Plot Area.",
                    "Display Units, Data Colors, Shapes.",
                    "Series, Custom Series and Legends.",
                ],
            },
            {
                day: "POWER QUERY LEVEL 1", 
                topics: [
                    "Power Query M Language Purpose.",
                    "Power Query Transformation Types.",
                    "Table & Column Transformations.",
                    "Text & Number Transformations.",
                    "Date, Time and Structured Data.",
                    "let, source, in statements with M Lang.",
                    "Power Query Functions.",
                    "Get Data, Table Creations and Edit.",
                    "Merge and Append Transformations.",
                    "Join Kinds, Advanced Editor, Apply.",
                    "ETL Operations with Power Query.",
                ],
            },
            {
                day: "POWER QUERY LEVEL 2",
                topics: [
                    "Query Duplicate, Query Reference.",
                    "Group By and Advanced Options.",
                    "Aggregations with Power Query.",
                    "Transpose, Header Row Promotion.",
                    "Data Type Changes & Detection.",
                    "Replace Nulls: Fill Up, Fill Down.",
                    "PIVOT, UNPIVOT Transformations.",
                    "Move Column and Split Column.",
                    "Extract, Format and Numbers.",
                    "Date & Time Transformations.",
                    "Deriving Year, Quarter, Month, Day.",
                    "Add Column : Query Expressions.",
                ],
            },
            {
                day: "DAX FUNCTIONS - LEVEL 1",
                topics: [
                    "DAX : Importance in Real-time.",
                    "DAX Data Types, Syntax Rules.",
                    "DAX Measures and Calculations.",
                    "DAX Operators, Special Characters.",
                    "DAX Functions.",
                    "Creating, Using Measures with DAX.",
                    "Creating, Using Columns with DAX.",
                    "Quick Measures and Summaries.",
                    "SUM, AVERAGEX, KEEPFILTERS.",
                    "Dynamic Expressions, IF in DAX.",
                ],
            },
            {
                day: "DAX FUNCTIONS - LEVEL 2",
                topics: [
                    "Using Calculated Columns in DAX.",
                    "Using Aggregated Measures in DAX.",
                    "Working with Facts & Measures.",
                    "CALCULATE Function Conditions.",
                    "RELATED & COUNTROWS in DAX.",
                    "Dynamic Expressions, RETURN.",
                    "Date, Time and Text Functions.",
                    "Logical, Mathematical Functions.",
                ],
            },
        ],
        targetAudience: [
            "Business Analysts and Data Analysts",
            "BI Developers and Data Professionals",
            "Excel Power Users looking to transition to Power BI",
            "Project Managers and Decision Makers who rely on data insights",
            "Anyone interested in data visualization, reporting, and business intelligence",
        ],
        courseBenefits: [
            "Gain hands-on experience with real-world Power BI tools and datasets",
            "Learn to create dynamic, visually rich dashboards and reports",
            "Improve your data cleaning and modeling efficiency with Power Query",
            "Understand DAX for building powerful analytics",
            "Enhance your career opportunities in the BI and data analytics field",
            "Lifetime access to course materials (if applicable to your offering)",
            "Prepares participants for Microsoft Power BI certifications (optional add-on)",
        ],
        courseCompletion: "Awarded for successfully completing a comprehensive training program covering Power BI fundamentals, data transformation, dashboard creation, and advanced analytics.",
    },
    {
        name: "QA Testing",
        category: "Testing",
        duration: "20 Days",
        summary: "Learn quality assurance methodologies for software testing.",
        image: "./assets/images/qa-testing.jpg",
        price: "850",
        description: "This comprehensive Manual Testing course provides learners with a solid foundation in software testing principles, techniques, and tools essential for ensuring software quality in real-world projects. Through a structured curriculum that balances theoretical knowledge with practical application, participants will gain hands-on experience in test planning, execution, documentation, defect tracking, and reporting. The course also introduces industry tools like Jira and TestRail, while integrating real-life scenarios to prepare learners for QA roles in software development environments.",
        courseObjectives: [
            "Understand the role and importance of manual testing in the software development lifecycle (SDLC).",
            "Design and execute test cases using industry-standard techniques such as equivalence partitioning and boundary value analysis.",
            "Create effective test documentation including test plans, test cases, and traceability matrices.",
            "Perform various types of testing including functional, non-functional, regression, and exploratory testing.",
            "Use test management and defect tracking tools like TestRail and Jira.",
            "Set up and manage test environments, data, and configurations.",
            "Apply software quality assurance principles and contribute to QA processes.",
            "Identify and mitigate common challenges in manual testing.",
            "Execute practical testing tasks and report defects in a simulated or real-world project setting.",
        ],
        curriculum: [
            {
                day: "1. Introduction to Software Testing",
                topics: [
                    "Understanding the importance of software testing.",
                    "Different types of testing (e.g., manual testing, automated testing, regression testing).",
                    "Software development life cycle (SDLC) and testing phases.",
                    "Fundamentals of Manual Testing",
                ],
            },
            {
                day: "2. Principles of manual testing",
                topics: [
                    "Test case design techniques (e.g., equivalence partitioning, boundary value analysis).",
                    "Test planning and strategy development.",
                    "Test Documentation",
                ],
            },
            {
                day: "3. Creating test plans, test cases, and test scripts",
                topics: [
                    "Test case management tools and best practices.",
                    "Traceability matrix and requirement traceability.",
                    "Test Execution and Reporting.",
                ],
            },
            {
                day: "4. Test execution process",
                topics: [
                    "Defect reporting and management",
                    "Test progress tracking and reporting",
                    "Types of Manual Testing",
                ],
            },
            {
                day: "5. Functional testing",
                topics: [
                    "Non-functional testing (e.g., performance testing, usability testing)",
                    "Regression testing",
                    "User acceptance testing (UAT)",
                    "Exploratory Testing",
                ],
            },
            {
                day: "6. Techniques for exploratory testing",
                topics: [
                    "Benefits and challenges of exploratory testing.",
                    "How to incorporate exploratory testing into the test process.",
                ],
            },
            {
                day: "7. Software Testing Techniques",
                topics: [
                    "Black-box testing",
                    "White-box testing",
                    "Grey-box testing",
                    "Positive and negative testing",
                ],
            },
            {
                day: "8. Test Environment Setup and Management",
                topics: [
                    "Creating test environments.",
                    "Configuration management and version control.",
                    "Test data management and generation.",
                ],
            },
            {
                day: "9. Software Quality Assurance",
                topics: [
                    "Principles of quality assurance.",
                    "Role of QA in software development.",
                    "QA processes and methodologies.",
                ],
            },
            {
                day: "10. Best Practices and Tools",
                topics: [
                    "Best practices for manual testing.",
                    "Overview of popular testing tools (e.g., Jira, TestRail).",
                ],
            },
            {
                day: "11. Challenges and Pitfalls in Manual Testing",
                topics: [
                    "Common challenges in manual testing.",
                    "Strategies for overcoming testing challenges.",
                    "Continuous improvement in the testing process.",
                ],
            },
            {
                day: "12. Case Studies and Practical Exercises",
                topics: [
                    "Real-world case studies illustrating manual testing scenarios.",
                    "Hands-on exercises to reinforce learning and practice testing techniques.",
                ],
            },
        ],
        targetAudience: [
            "Aspiring QA professionals or fresh graduates seeking to enter the software testing field.",
            "Junior testers who want to solidify their foundational knowledge and practices.",
            "Software developers or business analysts looking to understand manual testing processes.",
            "Non-technical professionals transitioning into software quality assurance roles.",
            "Teams undergoing QA upskilling or training for compliance and process improvement.",
        ],
        courseBenefits: [
            "Comprehensive understanding of manual testing practices from fundamentals to advanced techniques.",
            "Hands-on practice with real-world scenarios, case studies, and defect management tools.",
            "Exposure to industry-standard tools like Jira, TestRail, and version control systems.",
            "Learn to design high-quality test cases and test plans aligned with project requirements.",
            "Develop skills to communicate effectively with developers and stakeholders on test results and quality issues.",
            "Gain confidence to take on QA roles in Agile, Waterfall, or hybrid environments.",
            "Prepares you for entry-level certifications such as ISTQB Foundation Level",
            "Access to downloadable resources, test templates, and reusable test case samples.",
        ],
        courseCompletion: "Manual Software Testing: Concepts, Techniques, and Best Practices. This certificate acknowledges the participant’s ability to understand, apply, and execute manual testing techniques in software quality assurance environments",
    },
    {
        name: "SAP Security/GRC 12,12.1,12.1 and S4 Hana",
        category: "SAP",
        duration: "60 Days",
        summary: "Master SAP security and governance, risk, and compliance modules.",
        image: "./assets/images/sap-security.png",
        price: "1,500",
        description: "This SAP Security course provides a comprehensive overview of securing SAP environments through access control, role management, user authorization, and system auditing. It is designed to help professionals gain in-depth knowledge of SAP security architecture, understand how to manage user roles and authorizations effectively, and apply compliance and risk management principles to protect SAP systems from internal and external threats. Participants will explore key components such as SAP GRC, SUIM reports, role design strategies, and audit support, preparing them for real-world SAP security responsibilities.",
        courseObjectives: [
            "Understand the architecture and security model of SAP systems.",
            "Manage user access, roles, and authorizations using SAP tools and best practices.",
            "Implement security for various SAP modules (e.g., ECC, S/4HANA, Fiori).",
            "Use SAP GRC Access Control for risk analysis and mitigation.",
            "Interpret and manage audit logs, security traces, and SUIM reports.",
            "Apply compliance frameworks and segregation of duties (SoD) principles.",
            "Support internal and external audits with effective documentation and system reports.",
            "Understand the basics of cybersecurity in the context of SAP landscapes.",
        ],
        curriculum: [
            {
                day: "Module 1: Introduction to SAP Security",
                topics: [
                    "Overview of SAP system architecture",
                    "SAP Security fundamentals",
                    "Importance of access control in SAP",
                ],
            },
            {
                day: "Module 2: User and Role Administration",
                topics: [
                    "User types and creation (SU01)",
                    "Role creation and assignment (PFCG).",
                    "Profile generator and composite roles.",
                    "Mass user management (SU10)",
                ],
            },
            {
                day: "Module 3: Authorization Concept in SAP",
                topics: [
                    "Authorization objects, classes, and fields",
                    "Role-based access control (RBAC)",
                    "Authorization checks and troubleshooting",
                    "Using SU53 and ST01 for authorization analysis.",
                ],
            },
            {
                day: "Module 4: SAP Security Reports and Tools",
                topics: [
                    "SUIM – User Information System",
                    "ST03, STAD – Workload analysis",
                    "ST01 – System trace for security troubleshooting",
                    "SE93, SU24 – Transaction and authorization object mapping.",
                ],
            },
            {
                day: "Module 5: Segregation of Duties (SoD) and Compliance",
                topics: [
                    "Understanding SoD conflicts",
                    "Designing compliant roles",
                    "Introduction to SAP GRC Access Control",
                    "Risk analysis and remediation (AAM, SPM, EAM).",
                ],
            },
            {
                day: "Module 6: Security in SAP Modules",
                topics: [
                    "ECC vs. S/4HANA security differences",
                    "Fiori Launchpad and app security.",
                    "HR and FI/CO module-specific security considerations.",
                ],
            },
            {
                day: "Module 7: SAP Audit and Logging",
                topics: [
                    "Audit-relevant tables and transactions.",
                    "System logging (SM20, SM21)",
                    "Audit reporting for compliance",
                    "Supporting external and internal audits.",
                ],
            },
            {
                day: "Module 8: Best Practices and Security Governance",
                topics: [
                    "Role design best practices",
                    "Naming conventions and documentation standards.",
                    "Transporting roles and managing changes.",
                    "Security patching and mitigation strategies.",
                ],
            },
            {
                day: "Module 9: Introduction to Cybersecurity in SAP",
                topics: [
                    "Common SAP vulnerabilities",
                    "Security hardening basics",
                    "Integration with enterprise SIEM or IAM tools.",
                ],
            },
        ],
        targetAudience: [
            "SAP Security Analysts and Administrators",
            "System Administrators transitioning into SAP environments",
            "SAP Functional Consultants who need security awareness",
            "Internal Auditors and Compliance Officers",
            "GRC Consultants working on access control and risk mitigation",
            "IT Professionals preparing for SAP Security certification or job roles",
        ],
        courseBenefits: [
            "In-depth understanding of SAP Security architecture and processes",
            "Hands-on practice with SU01, PFCG, SUIM, ST01, and other tools",
            "Exposure to SAP GRC for access control and SoD analysis",
            "Learn to troubleshoot and resolve authorization issues efficiently",
            "Improve your organization’s SAP security posture and audit readiness",
            "Build a strong foundation for roles in SAP Security or GRC",
            "Preparation support for SAP Security certifications (e.g., C_SECAUTH)",
        ],
        courseCompletion: "Certificate of Completion in SAP Security. This certificate validates that the participant has successfully completed the SAP Security course and has demonstrated competence in SAP access control, authorization management, audit readiness, and compliance.",
        
    },
    {
        name: "SAP Testing",
        category: "SAP",
        duration: "30 Days",
        summary: "Learn specialized testing techniques for SAP implementations.",
        image: "./assets/images/sap-testing.png",
        price: "1,500",
        description: "This comprehensive SAP Testing course provides a solid foundation in both manual and automation testing practices specifically tailored for SAP environments. You will gain in-depth knowledge of SAP modules (SD, MM, FICO),business processes, screen flows, and project types (implementation, support, rollout, and upgrade). The course covers testing strategies such as unit testing, integration testing, regression testing, and UAT, along with hands-on practice on real SAP transaction codes and business cycles. You’ll also explore ERP testing fundamentals, understand how SAP differs from web-based systems, and learn how to use SAP TAO for automation. By the end of the course, you'll be equipped to contribute effectively to any SAP testing team, regardless of the project's scale or complexity.",
        courseObjectives: [
            "Understand core software and ERP testing principles.",
            "Identify the differences between manual and automated testing in SAP.",
            "Navigate the SAP interface, transaction codes, and business processes.",
            "Create and execute test cases and test plans across SAP modules.",
            "Perform SAP-specific testing types: unit, integration, regression, and UAT.",
            "Understand SAP enterprise structure and system landscape.",
            "Execute real business cycle testing (Sales, Delivery, Billing).",
            "Conduct screen flow testing using key T-codes (e.g., VA01, VL01n, VF01).",
            "Work across different SAP project types with appropriate test approaches.",
            "Gain a basic introduction to automation tools like SAP TAO.",
        ],
        curriculum: [
            {
                day: "Testing",
                topics: [
                    "Definition and importance of testing.",
                ],
            },
            {
                day: "Types of Testing",
                topics: [
                    "Different types of testing Ex. Black box, White box testing",
                    "Test plan.",
                    "Test Approach",
                ],
            },
            {
                day: "Manual testing and automation Testing",
                topics: [
                    "Definition",
                    "Automation tools",
                    "Difference between Manual and Automation",
                ],
            },
            {
                day: "ERP Testing",
                topics: [
                    "Definition of ERP various types of ERP.",
                    "Difference between ERP and WEB based testing.",
                    "What is SAP and SAP System Landscape",
                    "What is SAP and SAP System architecture?",
                    "Definition of SAP",
                    "Different modules in SAP Integration between modules Server’s connectivity",
                ],
            },
            {
                day: "ASAP Methodology",
                topics: [
                    "Project preparation Business blue print Realization",
                    "Final Preparation Go live",
                ],
            },
            {
                day: "Production Support",
                topics: [
                    "CR testing",
                ],
            },
            {
                day: "Types of Projects",
                topics: [
                    "Implementation project",
                    "Support projects",
                    "Rollout projects",
                    "Upgrade projects",
                ],
            },
            {
                day: "SAP Enterprise Structure",
                topics: [
                    "Definition",
                    "Assignment",
                ],
            },
            {
                day: "SAP Modules",
                topics: [
                    "Sales and distribution modules",
                    "Material management",
                    "FI-CO module",
                ],
            },
            {
                day: "SAP Testing Types",
                topics: [
                    "Unit testing",
                    "Integration testing",
                    "UAT",
                    "Regression Testing",
                ],
            },
            {
                day: "SAP Business Process",
                topics: [
                    "Definition",
                    "Client business process",
                ],
            },
            {
                day: "SAP Sales Cycles",
                topics: [
                    "Sales",
                    "Delivery",
                    "Billing",
                ],
            },
            {
                day: "SAP Navigation",
                topics: [
                    "Screens",
                    "Buttons",
                    "Tabs",
                ],
            },
            {
                day: "SAP Screen Flows",
                topics: [
                    "VA11, VA12, VA13 with test cases VA21, VA22, VA23 with test cases VA01, VA02, VA03 with test cases VL01n, VL02n, VL03nwith test cases VK11, VK12, VK13 with test cases",
                    "XD01, XD02, XD03 with test cases MM01, MM02, MM03 with test cases LT03, VF01 with test cases.",
                ],
            },
            {
                day: "SAP Interfaces",
                topics: [
                    "MM",
                    "FICO",
                ],
            },
            {
                day: "SAP Module Overview",
                topics: [
                    "SD",
                    "MM",
                    "FICO",
                ],
            },
            {
                day: "Introduction to SAP Automation",
                topics: [
                    "SAP-TAO",
                ],
            },
        ],
        targetAudience: [
            "Manual testers entering the SAP/ERP domain.",
            "QA professionals aiming to specialize in SAP testing.",
            "SAP end users or functional consultants wanting to learn testing workflows.",
            "Fresh graduates seeking career entry in ERP or software testing.",
            "IT professionals transitioning to ERP/SAP roles.",
        ],
        courseBenefits: [
            "ERP & SAP Focused: Specialized content designed around SAP testing practices.",
            "Covers All Major Testing Types: From manual test cases to regression and UAT.",
            "Project-Oriented: Exposure to various real-world SAP project scenarios.",
            "Transaction Code Testing: Work hands-on with T-codes like VA01, VL01n, MM01, and more.",
            "End-to-End SAP Business Process Testing: Learn the full Sales → Delivery → Billing flow.",
            "Intro to Automation: Foundation in SAP TAO and automation practices.",
            "SAP Interface Testing: Test cross-module integrations (SD, MM, FICO).",
            "Career-Ready: Equips you for QA/tester roles in SAP implementation or support teams.",
        ],
        courseCompletion: "This certificate acknowledges the participant’s ability to understand, apply, and execute manual testing techniques in software quality assurance environments", // This seems to be a copy-paste error from previous, should be specific to SAP Testing. Let's keep it as is, following the instruction "Kindly use exact words, topics and subtopics. don't create a summary of the content"
        
    },
    {
        name: "SQL for Data Analysis",
        category: "Data",
        duration: "30 Days",
        summary: "Use SQL to extract insights from relational databases.",
        image: "./assets/images/sql.png",
        price: "750",
        description: "The SQL Server Course is designed to equip you with a solid foundation in SQL Server, enabling you to design, manage, and query databases effectively. SQL Server is one of the most widely used relational database management systems (RDBMS) in the industry, and proficiency in Transact-SQL (T-SQL) is essential for database developers, administrators, and analysts. In this course, you will gain hands-on experience with SQL Server Management Studio (SSMS), learn how to create and manage database objects like tables, views, stored procedures, and triggers, and master complex SQL queries. You will also learn how to work with large datasets, handle data manipulation, and optimize your queries for performance. Whether you're just starting out or looking to refine your skills, this course will provide you with the expertise to manage and analyze data efficiently using SQL Server.",
        courseObjectives: [
            "Understand SQL Server and Transact-SQL (T-SQL):\n  Gain a comprehensive understanding of SQL Server Management Studio (SSMS) and the T-SQL language.\n  Understand how SQL Server fits into the broader ecosystem of relational databases.",
            "Write Simple and Complex SQL Queries:\n  Master the fundamentals of writing queries to retrieve, insert, update, and delete data from SQL Server databases.\n  Use complex queries involving joins, subqueries, and aggregations to retrieve meaningful insights from data.",
            "Work with Aggregate Functions:\n  Use aggregate functions (e.g., SUM, MIN, MAX, AVG) to calculate results across sets of data.",
            "Perform Data Manipulation:\n  Insert, update, and delete data, ensuring data integrity using SQL Server's transaction control mechanisms.",
            "Understand SQL Joins and Subqueries:\n  Learn to combine data from multiple tables using various types of joins (INNER, LEFT, RIGHT, FULL).\n  Write efficient subqueries to solve complex data retrieval problems.",
            "Handle Data Types:\n  Learn how to work with various SQL data types such as numeric, character, and date/time data types.\n  Understand how to choose the appropriate data types for different types of information.",
            "Create and Manage Views:\n  Create and manage views to simplify complex queries and provide an abstraction layer for data security.",
            "Work with Stored Procedures and Functions:\n  Learn how to create reusable stored procedures and functions for automating database operations.",
            "Create Triggers:\n  Understand how to use triggers to automate tasks like data validation, logging, and more in response to specific events in the database.",
        ],
        curriculum: [
            {
                day: "Module 1: Introduction to SQL Server",
                topics: [
                    "Overview of SQL Server Management Studio (SSMS)",
                    "Introduction to Transact-SQL (T-SQL)",
                ],
            },
            {
                day: "Module 2: Basic SQL Queries",
                topics: [
                    "SELECT Query Syntax",
                    "Filtering Data using WHERE Clause",
                    "Sorting Data using ORDER BY",
                    "Using DISTINCT to Filter Unique Values",
                ],
            },
            {
                day: "Module 3: Data Manipulation",
                topics: [
                    "Inserting Data using INSERT",
                    "Updating Data using UPDATE",
                    "Deleting Data using DELETE",
                    "Working with Transactions",
                ],
            },
            {
                day: "Module 4: Aggregate Functions",
                topics: [
                    "SUM, MIN, MAX, AVG",
                    "GROUP BY and HAVING Clauses",
                    "Using COUNT and DISTINCT with Aggregate Functions",
                ],
            },
            {
                day: "Module 5: SQL Joins",
                topics: [
                    "INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN",
                    "Self Join",
                    "Cross Join",
                ],
            },
            {
                day: "Module 6: Subqueries",
                topics: [
                    "Subqueries in SELECT, WHERE, and FROM Clauses",
                    "Correlated Subqueries",
                    "Using Subqueries for Complex Data Retrieval",
                ],
            },
            {
                day: "Module 7: Data Types in SQL Server",
                topics: [
                    "Numeric Data Types (INT, FLOAT, etc.)",
                    "Character Data Types (VARCHAR, CHAR, TEXT)",
                    "Date and Time Data Types",
                    "Working with Binary Data Types",
                ],
            },
            {
                day: "Module 8: Views in SQL Server",
                topics: [
                    "Creating Views",
                    "Modifying and Dropping Views",
                    "Using Views for Data Abstraction and Security",
                ],
            },
            {
                day: "Module 9: Stored Procedures and Functions",
                topics: [
                    "Creating and Executing Stored Procedures",
                    "Working with Parameters in Stored Procedures",
                    "Creating Functions in SQL Server",
                    "Returning Values from Functions",
                ],
            },
            {
                day: "Module 10: Triggers",
                topics: [
                    "Creating Triggers for INSERT, UPDATE, DELETE",
                    "Working with Trigger Events",
                    "Managing Triggers for Data Integrity",
                ],
            },
        ],
        targetAudience: [
            "Beginners with no prior experience in SQL or database management who want to start learning SQL Server.",
            "Software Developers interested in learning how to interact with and manage data in SQL Server.",
            "Database Administrators (DBAs) seeking to enhance their SQL Server knowledge and improve database management practices.",
            "Business Analysts who need to retrieve, manipulate, and analyze data from relational databases.",
            "Data Analysts who want to gain a deeper understanding of SQL Server for more efficient data querying and reporting.",
            "IT Professionals looking to expand their database management and SQL expertise.",
            "prerequisites: No prior SQL knowledge required. Basic understanding of computers and logical reasoning is helpful.",

        ],
        courseBenefits: [
            "Comprehensive SQL Skills: Gain expertise in SQL Server, including query writing, data manipulation, and database management.",
            "Hands-On Learning: Work with real-world data and databases to develop practical skills and build your confidence.",
            "Industry-Relevant Skills: Master SQL Server features like joins, subqueries, stored procedures, and triggers, which are essential for many database-centric roles.",
            "Improved Data Management: Learn to manage and optimize large datasets and improve the efficiency of your queries and operations.",
            "Boost Your Career: SQL Server is widely used in the tech industry, and expertise in SQL Server is a valuable asset in roles like Database Administrator, SQL Developer, and Data Analyst.",
            "Real-World Application: The skills learned in this course are applicable across various industries, including finance, healthcare, retail, and more, where managing and analyzing data is crucial.",
            "Improved Decision Making: Learn to leverage SQL queries to make data-driven decisions and optimize business processes.",
        ],
        courseCompletion: "Upon successful completion of the SQL Server Course, participants will receive a Certificate of Completion. This certificate will serve as a formal recognition of your proficiency in SQL Server, including your ability to write complex queries, manage database objects, and manipulate large datasets. You can showcase this certificate on your LinkedIn profile, resume, and portfolio to demonstrate your SQL skills to potential employers.\nThe certificate will specifically highlight your expertise in the following areas:\n Writing and optimizing SQL queries.\n Data manipulation and management in SQL Server.\n Creating and managing database objects such as tables, views, stored procedures, and triggers.\n Using advanced SQL techniques like joins, subqueries, and aggregate functions to extract and analyze data.\nThis certificate will help you stand out in the job market and is a valuable asset for anyone pursuing a career in database administration, development, or data analysis.",
    },
    {
        name: "Tableau",
        category: "Data",
        duration: "30 Days",
        summary: "Master data visualization with these powerful BI tools.",
        image: "./assets/images/tableau-two.jfif",
        price: "1500",
        description: "This comprehensive Tableau course is designed to equip individuals with the skills and knowledge necessary to master data visualization and analysis using Tableau. Whether you're a beginner or have some experience with data visualization, this course provides a structured pathway that covers everything from basic visualizations to advanced dashboard interactivity. You’ll learn how to connect to different data sources, create powerful charts and graphs, perform in-depth data analysis, and build interactive dashboards that drive insights. By the end of this course, you will be confident in using Tableau to visualize, analyze, and present your data effectively. This course is perfect for anyone looking to gain a deeper understanding of Tableau’s powerful capabilities and transform raw data into actionable insights.",
        courseObjectives: [
            "Understand Tableau Basics: Navigate Tableau's interface and work with different data types, including connecting to various data sources.",
            "Create and Customize Visualizations: Build and customize various types of visualizations such as bar charts, line charts, scatter plots, and heat maps.",
            "Perform Data Analysis: Use aggregation, disaggregation, sorting, grouping, and filtering to analyze data effectively.",
            "Master Calculated Fields: Create calculated fields using logic, string functions, and date math to manipulate and enhance your data.",
            "Format Dashboards: Apply best practices for formatting visualizations and dashboards to make them more readable and interactive.",
            "Develop Interactive Dashboards: Learn how to integrate multiple visualizations into a single interactive dashboard with filters, actions, and drill-down capabilities.",
            "Utilize Tableau's Advanced Features: Leverage advanced chart types like dual axes, combo charts, and geographic mapping to represent complex data.",
            "Apply Visual Best Practices: Understand and apply effective data visualization principles to communicate insights clearly and compellingly.",
        ],
        curriculum: [
            {
                day: "Introduction and Overview",
                topics: [
                    "Why Tableau? Why Visualization?",
                    "Level Setting – Terminology",
                    "Getting Started – creating some powerful visualizations quickly",
                    "The Tableau Product Line.",
                    "Things you should know about Tableau.",
                ],
            },
            {
                day: "Getting Started",
                topics: [
                    "Connecting to Data and introduction to data source concept.",
                    "Working with data files versus database server.",
                    "Understanding the Tableau workspace.",
                    "Dimensions and Measures",
                    "Using Show, Me!",
                    "Tour of Shelves (How shelves and marks work).",
                    "Building Basic Views",
                    "Help Menu and Samples",
                    "Saving and sharing your work",
                ],
            },
            {
                day: "Analysis",
                topics: [
                    "Creating Views",
                    "Marks",
                    "Size and Transparency",
                    "Highlighting",
                    "Working with Dates",
                    "Date aggregations and date parts",
                    "Discrete versus Continuous",
                    "Dual Axis / Multiple Measures",
                    "Combo Charts with different mark types",
                    "Geographic Map Page Trails",
                    "Heat Map",
                    "Density Chart",
                    "Scatter Plots",
                    "Pie Charts and Bar Charts",
                    "Small Multiples",
                    "Working with aggregate versus disaggregate data",
                    "Analyzing",
                    "Sorting & Grouping",
                    "Aliases",
                    "Filtering and Quick Filters",
                    "Cross-Tabs (Pivot Tables)",
                    "Totals and Subtotals Drilling and Drill Through",
                    "Aggregation and Disaggregation",
                    "Percent of Total",
                    "Working with Statistics and Trend lines",
                ],
            },
            {
                day: "Getting Started with Calculated Fields",
                topics: [
                    "Working with String Functions",
                    "Basic Arithmetic Calculations",
                    "Date Math",
                    "Working with Totals",
                    "Custom Aggregations",
                    "Logic Statements",
                ],
            },
            {
                day: "Formatting",
                topics: [
                    "Options in Formatting your Visualization",
                    "Working with Labels and Annotations",
                    "Effective Use of Titles and Captions",
                    "Introduction to Visual Best Practices",
                ],
            },
            {
                day: "Building Interactive Dashboard",
                topics: [
                    "Designer",
                    "Combining multiple visualizations into a dashboard.",
                    "Making your worksheet interactive by using actions and filters.",
                    "An Introduction to Best Practices in Visualization.",
                ],
            },
        ],
        targetAudience: [
            "Data Analysts and Business Analysts who want to enhance their data visualization skills.",
            "Managers and Executives who need to understand and interpret data visualizations for strategic decision-making.",
            "Data Scientists who wish to streamline their analysis with interactive dashboards and advanced visualizations.",
            "IT Professionals seeking to expand their knowledge of Tableau for data-driven projects.",
            "Students and Aspiring Data Professionals who are new to data visualization tools and want to gain hands-on experience with Tableau.",
            "prerequisites: No prior experience with Tableau is required, but familiarity with data analysis concepts will be beneficial.",
        ],
        courseBenefits: [
            "Hands-On Learning: Learn through practical, real-world examples and projects.",
            "In-Depth Knowledge: Gain a deep understanding of Tableau’s interface, tools, and advanced features.",
            "Interactive Dashboards: Master the creation of interactive dashboards that empower stakeholders to make data-driven decisions.",
            "Flexible Learning: Access the course anytime, anywhere, and learn at your own pace.",
            "Career Advancement: Enhance your resume with a highly sought-after data visualization skill, increasing your job prospects in industries that prioritize data-driven decision-making.",
            "Visual Communication Skills: Learn the principles of effective data visualization to communicate insights clearly to stakeholders and non-technical audiences.",
        ],
        courseCompletion: "That verifies your proficiency in using Tableau for data visualization and analysis. This certificate can be added to your resume, shared with employers, or displayed on your professional profiles to showcase your newly acquired skills.",
    },
    {
        name: "Vertex AI",
        category: "AI",
        duration: "60 Days",
        summary: "Explore generative AI models and their applications across industries.",
        image: "./assets/images/dark.jpg",
        price: "3,000",
        description: "The Vertex AI Course is a comprehensive training program that focuses on using Google Cloud Platform (GCP) for building, deploying, and managing machine learning (ML) models. This course is designed to provide learners with both foundational and advanced skills in AI, covering everything from basic model creation to deploying sophisticated AI solutions with Vertex AI. In 9 weeks, learners will explore Vertex AI's suite of tools, including AutoML, custom model training, and deployment strategies. The course covers a wide range of applications such as Natural Language Processing (NLP), Computer Vision (CV), time-series forecasting, and recommendation systems. Practical, hands-on labs and a capstone project ensure that students can apply their knowledge to real-world scenarios. This course will also prepare you for the Google Cloud Professional Machine Learning Engineer certification exam, ensuring you're well-equipped to succeed in the fast-growing field of AI and ML engineering.",
        courseObjectives: [
            "Navigate GCP and Vertex AI:  Set up and manage GCP projects and Vertex AI resources.\n  Understand GCP's IAM (Identity and Access Management) roles and permissions for AI projects.",
            "Build and Train Machine Learning Models:  Use AutoML for simple model training and evaluation.\n  Train custom models using Vertex AI’s advanced training tools, leveraging Docker and AI containers.",
            "Optimize Model Performance: Fine-tune models with hyperparameter tuning and advanced feature engineering techniques.\n  Evaluate model performance with key metrics.",
            "Deploy AI Models: Deploy trained models to production using Vertex AI endpoints.\n  Implement model monitoring and logging to track model performance.",
            "Explore Specialized AI Applications: Develop models for NLP, CV, and recommendation systems using Vertex AI tools.\n  Understand and implement generative AI with tools like Gemini.",
            "Work with AI Pipelines: Build end-to-end machine learning pipelines for continuous training and deployment.\n  Integrate data processing tools like Dataflow with Vertex AI for real-time AI applications.",
            "Prepare for Google Cloud Certification:  Review core concepts and practice for the Google Cloud Professional Machine Learning Engineer exam.",
        ],
        curriculum: [
            {
                day: "Week 1: Introduction to Vertex AI and GCP Fundamentals",
                topics: [
                    "Day 1: Introduction to AI and ML on GCP\n  Overview of GCP and Vertex AI\n  Understanding Machine Learning (ML) concepts\n  Exploring AI applications",
                    "Day 2: GCP Essentials\n  Setting up GCP project\n  Managing GCP resources\n  Overview of IAM (Identity and Access Management)",
                    "Day 3: Understanding Vertex AI\n  Introduction to Vertex AI components\n  Key features and use cases",
                    "Day 4: Vertex AI Workbench\n  Setting up Vertex AI Workbench\n  Exploring Jupyter notebooks\n  Data visualization with BigQuery and Pandas",
                    "Day 5: AI and Data Management\n  Data labeling with Vertex AI\n  Importing datasets from BigQuery and Cloud Storage\n  Data preprocessing techniques",
                    "Day 6: Hands-on Lab\n  Connect Vertex AI with BigQuery\n  Run basic queries for data exploration",
                    "Day 7: Review and Q&A\n  Recap concepts\n  Solve practice problems",
                ],
            },
            {
                day: "Week 2: Build and Train Machine Learning Models",
                topics: [
                    "Day 8: Introduction to AutoML\n  Overview of AutoML capabilities\n  Creating and training AutoML models.",
                    "Day 9: Custom Training in Vertex AI\n  Introduction to custom training\n  Understanding Docker and AI containers.",
                    "Day 10: Model Training Process\n  Choosing the right model\n  Monitoring and evaluating model performance.",
                    "Day 11: Feature Engineering\n  Creating effective features\n  Using Feature Store in Vertex AI",
                    "Day 12: Hyperparameter Tuning\n  Running hyperparameter tuning jobs\n  Analyzing tuning results",
                    "Day 13: Hands-on Lab\n  Perform AutoML classification\n  Evaluate and deploy the model",
                    "Day 14: Weekly Review and Mini Project\n  Train a simple image classification model using AutoML.",
                ],
            },
            {
                day: "Week 3: Model Deployment and Monitoring",
                topics: [
                    "Day 15: Model Deployment with Vertex AI\n  Creating endpoints for model serving\n  Deployment strategies",
                    "Day 16: Model Monitoring\n  Implementing model monitoring and logging.\n  Using Cloud Monitoring and Logging.",
                    "Day 17: Model Explainability\n  Introduction to Explainable AI\n  Interpreting model predictions",
                    "Day 18: Model Versioning and Management\n  Managing multiple model versions\n  Using Vertex AI Model Registry",
                    "Day 19: Hands-on Lab\n  Deploy an AutoML model and monitor its performance.",
                    "Day 20: Real-time Inference\n  Building REST and gRPC endpoints.\n  Streaming predictions with Vertex AI.",
                    "Day 21: Weekly Review and Assessment\n  Conduct a Q&A session and solve deployment challenges.",
                ],
            },
            {
                day: "Week 4: Advanced Concepts in Vertex AI",
                topics: [
                    "Day 22: Introduction to Pipelines\n  Understanding ML pipelines\n  Building Vertex AI Pipelines",
                    "Day 23: Pipeline Components\n  Creating reusable pipeline components using Kubeflow.",
                    "Day 24: Dataflow Integration\n  Real-time data processing with Dataflow.\n  Integrating with BigQuery.",
                    "Day 25: CI/CD for Machine Learning\n  Continuous training and deployment.\n  Using Cloud Build and Cloud Functions.",
                    "Day 26: Model Monitoring and Bias Detection\n  Understanding AI bias and fairness.\n  Implementing bias detection with Vertex AI.",
                    "Day 27: Hands-on Lab\n  Build a complete pipeline from data ingestion to deployment.",
                    "Day 28: Weekly Review and Q&A\n  Discuss common challenges and review projects.",
                ],
            },
            {
                day: "Week 5: Specialized AI Applications",
                topics: [
                    "Day 29:\n  NLP with Vertex AI.\n  Introduction to Natural Language Processing.\n  Text classification and sentiment analysis.",
                    "Day 30: Computer Vision\n  Image classification and object detection.\n  Using Vision AI APIs",
                    "Day 31: Time Series Forecasting\n  Building time series models\n  Analyzing patterns using AutoML",
                    "Day 32: Recommendations and Personalization\n  Building recommendation systems\n  Vertex AI for personalization",
                    "Day 33: Generative AI\n  Introduction to Generative AI models\n  Using Gemini or other foundational models",
                    "Day 34: Hands-on Lab\n  Implement a text classification pipeline using Vertex AI",
                    "Day 35: Mid-Point Review and Project Planning\n  Choose a project theme\n  Define scope and resources",
                ],
            },
            {
                day: "Week 6-8: Capstone Project and Certification Prep",
                topics: [
                    "Day 36-45: Capstone Project Development\n  Choose from areas like NLP, CV, or Recommendation Systems.\n  Build end-to-end AI solutions\n  Create pipelines for training, evaluation, and deployment.",
                    "Day 46: Model Optimization\n  Optimize model performance using tuning and quantization.",
                    "Day 47: Model Governance and Compliance\n  Implement model management policies.\n  Ensure data privacy and compliance.",
                    "Day 48: Project Testing and Debugging\n  Perform thorough testing and debugging.",
                    "Day 49: Project Finalization\n  Prepare presentations and reports.",
                    "Day 50: Project Presentation\n  Present your AI solution.",
                ],
            },
            {
                day: "Week 9: Certification Prep",
                topics: [
                    "Day 51-53: Review and Practice\n  Go through practice questions.\n  Review GCP and Vertex AI documentation.",
                    "Day 54-55: Exam Strategy\n  Practice time management.\n  Solve mock exams.",
                    "Day 56: Final Q&A\n  Address doubts and reinforce concepts.",
                    "Day 57: Relax and Recharge\n  Take a break before the exam day.",
                    "Day 58: Certification Exam\n  Take the official Google Cloud Professional Machine Learning Engineer exam.",
                    "Day 59: Post Exam Reflection\n  Reflect on the exam.\n  Note areas for improvement.",
                    "Day 60: Celebrate and Plan Next Steps\n  Celebrate your achievement.\n  Explore further AI opportunities.",
                ],
            },
        ],
        targetAudience: [
            "Aspiring Data Scientists and Machine Learning Engineers: Individuals looking to transition into the field of AI and ML, with a focus on cloud-based solutions.",
            "Software Developers: Professionals who want to expand their skills in AI and ML, particularly using Google Cloud services.",
            "Cloud Engineers and Architects: Those looking to specialize in machine learning and AI solutions on GCP.",
            "IT Professionals with a Background in Data: Individuals familiar with data analysis or software engineering and looking to dive into AI/ML.",
            "University Graduates: Fresh graduates in fields such as computer science, data science, and engineering interested in pursuing careers in AI.",
            "Tech Enthusiasts: Anyone interested in learning and building cutting-edge AI applications using Google Cloud.",
        ],
        courseBenefits: [
            "Hands-on Learning: Gain practical experience through hands-on labs that involve building, training, and deploying AI models on Vertex AI.",
            "Comprehensive Curriculum: Learn both the basics and advanced concepts of Vertex AI, with coverage on AutoML, custom training, AI pipelines, and specialized applications like NLP and CV.",
            "Capstone Project: Apply your knowledge to an end-to-end AI project, solving real-world challenges and demonstrating your skills.",
            "Google Cloud Professional Machine Learning Engineer Certification: Prepare thoroughly for the certification exam with targeted lessons, review sessions, and mock exams.",
            "Real-World Experience: Work on industry-standard tools and technologies used by leading organizations for AI and machine learning.",
            "Increased Career Opportunities: Enhance your career prospects by learning a highly sought-after skillset in AI and ML, making you a competitive candidate for roles in the rapidly growing field of AI engineering.",
            "Networking and Collaboration: Interact with instructors and peers, exchanging knowledge and ideas, which can enhance your professional network.",
        ],
        courseCompletion: "This certificate validates your expertise in building, deploying, and managing machine learning models using Google Cloud’s Vertex AI platform. It demonstrates to employers your proficiency in leveraging AI technologies to create robust and scalable solutions, enhancing your employability in AI and machine learning roles.\nThe certificate can be added to your professional portfolio, helping you stand out in the competitive AI job market, and is an excellent credential for those pursuing the Google Cloud Professional Machine Learning Engineer certification.",
    }
];

export default courses
