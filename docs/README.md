# About Lemonade

### Lemonade Overview

Lemonade (**L**ive **E**xploration and **M**ining **O**f **N**on-trivial **A**mount of **D**ata from **E**verywhere) is a visual platform for distributed computing, aimed to enable implementation, experimentation, test and deploying of data processing and machine learning applications. It provides a higher level of abstractions, called operations, to users build processing workflows using a graphical web interface. By using high performance and scalable technologies, such as COMPSs, Ophidia and Spark, Lemonade can process very large amount of data, hiding all backend complexity from the users and allowing them to focus mainly in the construction of the solution.

Lemonade is implemented as an open-source tool and is under development as a product of [EUBra-BIGSEA](http://www.eubra-bigsea.eu/) project

### Project & Community

Each project's submodule has its own repository in Github:

* [Citron](https://github.com/eubr-bigsea/citron)
* [Tahiti](https://github.com/eubr-bigsea/tahiti)
* [Juicer](https://github.com/eubr-bigsea/juicer)
* [Stand](https://github.com/eubr-bigsea/stand)
* [Limonero](https://github.com/eubr-bigsea/limonero)
* [Caipirinha](https://github.com/eubr-bigsea/caipirinha)
* [Thorn](https://github.com/eubr-bigsea/thorn)


### More Information
* [Lastest Release](https://teste.ctweb.inweb.org.br/landing-page)
* [Basic Usage]()
* [Technical Documentation](https://github.com/eubr-bigsea/citron/wiki/API)

### Additional Support
* [Support]()
* [FAQ]()
* [Tutorials]()

## Origin and motivations

Visual workflows tools provide a higher level of abstraction than general purpose programming languages, even those created specifically to data processing, such [R language](https://www.r-project.org/). 

Today, current processing infrastructure capacity and price and the availability of large amount of data enabled the development of new applications, previously restricted to very large companies and organizations. However, to fully exploit such opportunity, a team should deal with different expertises, such as business domain, programming skills and infrastructure maintenance. Sometimes, one wants just test an hypothesis about the data, not to learn technical details. 

Available data processing tools have a very large spectrum regarding processing capacity, ranging from desktop spreadsheet tools to very large computer clusters. Also, abstraction level ranges from low level programming languages (e.g. GPU processing) to completely black box solutions. Visual programming is an approach where procedure or program is constructed by arranging program elements graphically instead of writing it in a programming language and has become popular thanks to the proliferation of tools, such as [Knime](https://www.knime.com/), [Weka](https://www.cs.waikato.ac.nz/ml/weka/), [RapidMiner](https://www.cs.waikato.ac.nz/ml/weka/), [ClowdFlows](http://clowdflows.org) and [Microsoft Azure ML Studio](https://studio.azureml.net). 

**Lemonade** shares many similarities with aforementioned technologies. We believe Lemonade is different regarding its integration with big data processing technologies included in the project (COMPSs. Spark, Ophidia) and with other project teams/work packages. Lemonade integrates with infrastructure by allowing users to specify QoS constraints for the execution. Such constraints will be used to statically or dynamically allocate resources for process the workflow. Privacy and security (under progress) are configurable by constraints implemented as parameters or operators in Lemonade. 
All operations available in Lemonade user interface are kept as metadata information. It is easy to someone to define new operations by adding meta information and changing backend implementation. 

#### Related work

The KNIME [R2] is a framework which enables visual and interactive execution of a data pipeline for data mining. This environment was developed to be a collaborative platform for teaching and research. Brings the high-level development of workflows for data analysis, is not necessary skills in programming languages. KNIME has 3 main attractives: Interactive framework, modularity and easy extensibility.

The Weka [R3] is  a project aims to provide machine learning algorithms and data preprocessing tools to many users (teachers, students, researchers, etc).  Its advantage is be a modular and extensible architecture. Weka has a wide variety of algorithms for regression, classification, clustering, association rule mining and attribute selection. Users may create sophisticated data mining processes to get relevant information on data.

The platform ClowdFlows [R5] is a cloud-based web application for distributed computing (with batch or real-time processing mode). It allows to create and perform data mining workflows through visual programming. An application in visual programming is constructed by “dragging and dropping” graphical elements instead of writing the source code as text. The ClowdFlows for batch processing uses MapReduce programming model through DiscoMLL library. MapReduce programming simplifies execution of parallel and distributed processing to multiples machines.

Mention Azure Machine Learning Studio [R6] is a cloud service that enables to easily build, deploy, and share predictive analytics solutions.  There’s no code required, but needs commercial license to use whole functions and tools. Azure provides visual workflows with state of the art algorithms, that can be run in parallel/cloud. 

## Target users
Todo

## Basic concepts

The terminology used in Lemonade is a common one, but we would like to reinforce some definitions in order to better explain the platform. The domain model diagram is shown in Figure L0.

### <a name="data-sources-and-storages"></a> Data sources and storages
Metadata related to data sources and their attributes are kept and used during the design and execution time. Users will configure tasks requiring information about data source attributes selecting them from a list of available ones. Such list is provided by metadata services, described ahead, in Lemonade architecture section. 

### Operations, ports and parameters

Operation is the smaller execution unit defined in Lemonade. Each operation has a set of parameters (defined as forms), a set of ports. An operation is mapped into a block of code to be executed in the underlying execution platform. Different execution platforms may have different operations, but in general, there is a set of common operations available in most of them, generally operations related to tasks as extraction, transformation and loading (ETL). In Lemonade, there are different categories.


### Workflows, tasks and flows

Workflow is a group of tasks (instances of operations), organized as a direct acyclic graph (DAG). Tasks communicate each other by flows connecting a source port with a target port. Each port has a direction (INPUT or OUTPUT), a cardinality (ONE, MANY) and one or more interfaces defined (e.g., IData, IModel). Interfaces are used to validate flows by using kind of type system. Users can not connect two ports if they do not share at least one common interfaces. Forms defined in operations are filled by interface (Citron) for each task associated to those operations. 

### Jobs, steps, results and clusters

After submitting a workflow, a job is launched to process the workflow. The DAG formed by tasks and flows is evaluated and converted into code to be ran in the underlying execution platform. Current version of Lemonade allows only the execution of the entire workflow, but we have plans to allow partial execution and even incremental one, dispensing the execution of tasks already processed and not changed in the interface. 

### Visualizations and dashboards
Todo

# Supported platforms

Lemonade currently supports 3 execution platforms:

* [Apache Spark 2.2.0](http://spark.apache.org/docs/2.2.0/). Some workflows may work in previous versions, but at least version 2.0.0 is required. Supports code generation and execution control of workflows. Code is compatible with PySpark and can be ran outside Lemonade. 
* [Barcelona Supercomputer Center - BSC COMPSs](https://www.bsc.es/research-and-development/software-and-apps/software-list/comp-superscalar). Supports code generation. Execution management is under development.
* [Python Scikit Learn](http://scikit-learn.org/stable/) + [Pandas](http://pandas.pydata.org/). Under development. Prelimary code generation, not all operations supported.

New platforms can be developed. See _[developing for new platforms]()_ in the Programming Guide.
 
 ---

# Installation

## Installing the latest version

## Using a Docker container

In the following Figure, Lemonade microservices are deployed as containers managed by Docker and by the underlying virtualization technology. Workflows in Lemonade are converted into PySpark code and runs on Apache Spark or COMPSs (under development), consuming resources in HDFS or in Ophidia (under development). In general, Lemonade's microservices do not require elasticity, because they are small applications and do not really execute any CPU or memory intensive code, this is responsibility of the underlying processing platform (COMPSs or Spark). As described in previous section, COMPSs PMES was modified in order to support Mesos and elasticity provided by QoS infrastructure. Spark itself is already integrated with Mesos.

![Docker installation](/vuepress/img/image1.jpg "Docker installation")
### Preparing to build

```bash

git clone git@github.com:eubr-bigsea/docker-lemonade.git
cd docker-lemonade
git submodule init
git submodule update --remote

```

### Building and running


```
docker-compose up
```

Running on detached mode:

```
docker-compose up -d
```

---

# Architecture

## Micro-services organization

![Micro-services architecture](/vuepress/img/image2.jpg "Micro-services")

### Citron

Citron is a web based user interface used in Lemonade to create workflows. Users may choose among a set of predefined operations which will compose the workflow by dragging and dropping them into the design area. Among the operations, there are operations for reading and writing data in different storages, such as file systems (including distributed, such as HDFS) and databases.

Each operation is grouped by category and configured by forms, including parameters for execution, appearance, quality of service (QoS) and security & privacy settings. Citron interacts with Tahiti component in order to retrieve operations metadata and persist workflows and with Limonero component to retrieve and save data source metadata. 

Workflow execution status is provided by Lemonade Stand and it is integrated with Citron by using web sockets 


### Tahiti

Tahiti manages metadata associated with operations. Operations are the smallest unit of processing and represent a coarse granularity task executed on one of the supported backends. 
Currently, Lemonade supports ETL and some machine learning operations. 
New operations can be implemented if the underlying processing framework supports them.
Metadata include operation name, description, parameters and ports. 
Ports are communication points that have direction (input and output), multiplicity (how many supported connections) and should “implement” interfaces in order to guarantee compatibility between operations. 
Each operation has a set of parameters grouped as forms. Forms are organized into different classes, e.g. execution, security & privacy, quality of service, appearance, reports and logging.

In order to provide extensibility, all operations in Lemonade are defined in two components: Tahiti and Juicer. Tahiti keeps all operation metadata, including their names, ports and related forms and makes such information available by an API, consumed by Citron when it starts rendering the user interface.  
Although by using Tahiti with Citron we eliminated the dependency between the interface and the available abstractions, still there is a strong dependency between Tahiti managed metadata and the execution component, Juicer. In order to create or modify a new operation, a developer must insert or update  information in Tahiti and implement changes directly in Juicer source code. 

There is another class of metadata related to the data sources themselves. In a design decision, we choose to keep, for each data source available in Lemonade, metadata about user access permissions, attributes (including the name, datatype, precision, length, nullability, if they are labels or features and their statistical data, distribution, how many missings, mean, max, min values, etc.) and the format of the data (CSV, JSON, Parquet, etc). Such information is used when reading data in order to avoid misinterpretation of formats, validation of input and of the workflow, optimize reading and finally, integrate more easily with the visualization component, Caipirinha (more details ahead). 


### Limonero

Limonero is similar to Tahiti, but instead of keeping metadata about operations, it keeps metadata information about data sources. 
Data sources may be input to workflows and also created by them as output. Data source metadata includes: 
Location: where data are located and in which storage technology (for instance, HDFS).
Data format and structure: If the data are in JSON format, what the columns and their data types are, and if any given column is optional, if it is a feature or a label. 
Access restrictions: ownership of data sets, authorization and privacy concerns. 
Statistics about the data: number of records, size in MB, column-specific information such as number of missing records, min/max/average/median values, deciles distribution, etc. 
Metadata are used by web interface to enable or disable data visualizations and operations, according to data/visualisation and data/operation compatibility. 
Currently: data source upload, soon data source download.

### Juicer

uicer has four main responsibilities: 
Receive a workflow specification (JSON) from Stand and convert it into executable code (transpile operations into respective underlying technology code). 
Execute the generated code, controlling the execution flow. 
Report execution status to Stand.
Interact with Limonero API in order to create new data sets and record their metadata. 
Under the hood, Juicer will generate code targeting a distributed processing platform, such as Spark and BSC COMPSs 
Code is executed in batch mode. 
Future versions may implement support to interactive execution. 
Being a higher level abstraction, Lemonade does not map all possible operations existing in the underlying technology.
But “black-box” operations that execute low-level code may be registered and used in a workflow.

### Thorn

Thorn controls authentication and authorization.
Current version uses a custom database schema.
Future versions may be integrated with existing technologies, such as OpenStack Keystone.
Evolution depends on work in EUBra-BigSea project (WP6).
Integration with LDAP (authentication).
Thorn is not used when components are communicating:
Authentication is based on static tokens defined in configuration files.

Thorn is the module responsible for provide security and privacy constraints in Lemonade. Current version only works with basic authentication and authorization but working groups from WP5 and WP6 are working together in order to create a common solution. The interaction between all components, except Caipirinha, is shown in Figure L3 below.
![Micro-services interaction](/vuepress/img/image3.jpg "Micro-services interaction")


### Stand

Stand is a facade between user interface (Citron) and backend execution (Juicer).
It receives workflow execution requests and places them in a queue (we are using a queue implemented in Redis storage).
Juicer consumes the execution queue and for each workflow and task in execution, reports their statuses in a persistent database (MySQL) and in a publisher-subscriber topic in Redis.
Stand subscribes to each topic and reports execution status to Citron by using web sockets.

Citron allows users to start the workflow execution and Juicer is responsible for retrieving information about the execution from the underlying execution platform. To keep both components decoupled, a third component, Stand is needed. 

Stand a facade between user interface (Citron) and backend execution (Juicer). User interface should be responsiveness, while the backend is batch processing the workflow. Stand decouples the other two components by using async communication, implemented as a producer-consumer queue in Redis. Interactions between components are shown in Figure L2. When a user triggers the execution of a workflow, Citron invokes Stand in order to run the job (1a) and also connects to a websocket which provides feedback to the user interface (1b). Stand receives the request and pushes it into a queue (2a) and starts consuming status queue (2b) that feeds the websocket. Juicer consumes the execution queue (3a) and for again, reports execution status by pushing it to a publisher-subscriber topic in Redis (volatile) and updating rows in MySQL (persistent) (5). Citron then receives notifications about tasks execution status (6) and updates the interface. 


![Micro-services interaction](/vuepress/img/image4.jpg "Micro-services interaction")

### Caipirinha

Caipirinha is the Lemonade service responsible for providing configuration for  data visualization.
It uses metadata information about data sets provided by Limonero.
Still being designed:
Requirements identification
Domain modeling
Challenges in usability and user experience in web applications
Final version will be “data exploration centric”: 
Instead of start from a workflow and then generate a visualization, final version will allow users to start from data, create visualizations, set parameters and then a workflow is generated (and processed).

An important requirement of Lemonade is to provide feedback to users about tasks execution and results. When a task modifies an input data, user must be able to analyze the resulting data by inspecting it directly (e.g. using a table) or by visualizing it by a visual metaphor (charts, graphs, custom visualizations, etc.). Caipirinha is a framework that integrates with Lemonade data and metadata in order to provide data visualization. The idea is to provide to the user a set of common visualizations, like tables, pie, line and bar charts with little effort in customization. For more sophisticated visualizations, user can configure a generate visualization operation with the type of the visualization and its parameters, something like the chart generation wizard present in common spreadsheet software. Visualizations will be enable/disabled according to predefined requirements. Such requirements are part of the visualization metadata and will be stored in Caipirinha. 


## Services communication


## Source code generation

Workflow is represented internally in JSON format. When a new job is created in order to execute a workflow, Juicer will convert code to code (transpile), parsing JSON format into a Python language script compatible with the underlying processing platform. The utilization of Python language restricts targeting platforms, but now, COMPSs, Ophidia and Spark supports it. We do not foresee the need of using a real compiler, but maybe in future we could extend Juicer to support it. 

## Code execution and platforms


