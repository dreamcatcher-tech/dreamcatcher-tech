---
published: false
title: 'Natural Language Apps'
description: ''
---

_"napps: a universal package format to make all code AI callable"_

![](assets/2024-10-15-napps.jpg)

<!--truncate-->
<br/>

> **Give me a json function interface and an execution environment and I will
> move the whole world**
>
> _LLMs everywhere trying to do their jobs_

The fundamental principle of the "napp" format is to provide a unified interface
for deterministic computing (classical code) and probabilistic computing (AI),
enabling these two paradigms to work together effectively by presenting as a
single, highly tested, reusable unit.

In order for these two paradigms to merge, we can simultaneously merge in the
web API paradigm which is foundational to cloud computing, and add in the
blockchain paradigm, providing a highly cohesive means of packaging
functionality into composable units.

If we can bridge between natural language generators and conventional code
execution, then we can also bridge between conventional code execution flavours
for no extra effort, enabling python apps to call rust apps to call javascript
apps and so on.

## Rationale for a New Package Format

### Bridging Programming Languages and AI through JSON

Traditional package formats are inherently tied to specific programming
languages, necessitating custom tools or language-specific package managers for
invocation. This fragmentation introduces significant challenges, particularly
in an era where AI systems, such as large language models (LLMs), increasingly
interface with code across multiple languages.

JSON has emerged as a universal data interchange format, both language-agnostic
and conducive to AI integration. By standardizing function calls across all
languages using JSON, the "napp" format ensures compatibility with AI and
natural language processing systems. This approach simplifies cross-language
interoperability and leverages the capabilities of LLMs in understanding and
generating JSON-formatted data.

### An AI friendly package format

The current packaging tools were all created before AI was mainstream. The
formats were made to cater to humans, and they made design choices for adoption
and freedom, rather than practicality and correctness. If a package format is
intended to be used mostly by an AI, then it must make sense to the AI
naturally, it must be minimal with the least number of surprises being possible
in it, and it must favour compact units rather than large sprawling megamodules,
which are torturous for both humans and AIs alike, but not really
disincentivized in traditional package formats.

## The "napp" Format Specification

### Key Features

- **Language-Agnostic Execution**: "napp" packages will support all major
  programming languages, including Python, JavaScript, Go, and Rust. An
  efficient translation layer routes JSON calls to native function calls,
  enabling seamless interaction across languages.

- **Security and Permissions**: Each package explicitly defines its required
  permissions (e.g., network access, filesystem operations). The execution
  environment enforces these permissions to ensure secure operation and prevent
  unauthorized actions.

- **Git-Based Version Control**: Packages are stored in Git repositories,
  enabling comprehensive version tracking, content deduplication, and efficient
  updates through delta changes.

- **Reproducible Builds**: Including source code and build scripts within the
  package ensures that builds can be reproduced locally, enhancing both security
  and transparency.

- **Monetization and Attribution**: Built-in mechanisms support usage costs,
  modification payments, and contributor attribution, fostering a fair and
  incentivized ecosystem for developers.

- **State Management**: Packages manage state between invocations using isolated
  filesystem areas and state identifiers, supporting complex interactions and
  persistent sessions.

- **AI-Native Interface**: "napp" packages are designed to be "chattable,"
  supporting natural language interfaces that allow AI systems to effectively
  perform function calls.

* **Comprehensive Documentation**: Inclusion of descriptions, usage examples,
  API specifications, and metadata to facilitate developer engagement.

* **Testing and Validation**: Provision of tests and example runs to assess
  package functionality and estimate execution costs prior to deployment.

## Use Cases and Applications

### Serverless Platform Integration

"napp" packages can be deployed on serverless platforms, allowing developers to
execute applications at scale without managing infrastructure. They support API
calls over the network, facilitating integration into larger systems and
enabling rapid deployment.

### Browser Compatibility

"napp" packages compatible with browser environments can run directly within
browsers by leveraging modern web technologies, enabling developers to build
rich, interactive web applications with minimal configuration.

### AI and LLM Integration

By exposing functions that are optimized for AI-driven invocation, "napp"
packages simplify interactions with LLMs. AI systems can seamlessly interface
with packages through JSON parameters and natural language queries, thus
enhancing AI-driven development workflows.

## Conclusion

The "napp" format provides a comprehensive approach to package design for the
AI-integrated development ecosystem. By unifying cross-language interfaces,
enhancing security, and integrating deterministic and probabilistic computing
paradigms, "napp" offers a robust framework for AI-native applications. We
encourage developers, AI researchers, and the broader community to explore and
contribute to the "napp" format.
