---
prev: false
next: false
---

# Frequently Asked Questions

## Missing DLL File

::: details The program cannot start because MSVCP140.dll is missing from your computer (0xc000007b error).
This problem is usually caused by a missing **Microsoft Visual C++ Redistributable** component. We provide two solutions; if neither resolves your issue, please try seeking help from the Microsoft Community.
### Method 1: Install the latest Microsoft Visual C++ Redistributable
**MSVCP140.dll is a component of Visual C++ Redistributable for Visual Studio 2015-2022. Installing this component will fundamentally solve the problem.**
1. Visit the [Microsoft Visual C++ Redistributable for Visual Studio 2015-2022](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170) page.
2. Select and download the version appropriate for your system architecture (32-bit or 64-bit). For 64-bit operating systems, select vc_redist.x64.exe; for 32-bit operating systems, select vc_redist.x86.exe.
3. After downloading, double-click to run the installer.
4. In the User Account Control dialog box, click "Yes" to grant permissions.
5. Check "I agree to the license terms and conditions," and then click "Install."
6. Wait for the installation to complete, and then restart your computer.

### Method Two: Perform a System File Integrity Check
If the problem persists after installing the component, you can use the system's built-in tool to check and repair system files:
1. Press the `Win + R` key combination to open the "Run" dialog box, enter the following command, and then press Enter:

```cmd

sfc /scannow

```
2. The system will begin scanning and repairing damaged system files. Please wait patiently for the process to complete.
3. After the scan is complete, restart your computer.

### Common Problem Handling
- If prompted "A higher version is already installed," select the "Repair" option instead of uninstalling.
- If installation fails, ensure your Windows system is updated to the latest version.
- If the problem persists, it is recommended to obtain further support from the Microsoft official website.
:::

## Webview Related
::: details Missing Edge at runtime Webview2
Some programs provided by Vilinko Studio may require Webview to run. If the relevant Webview is not installed on your computer, our programs may not function properly. We recommend that you install the Microsoft Edge Webview2 program from the Microsoft official website.

https://developer.microsoft.com/en-us/microsoft-edge/webview2/#download
:::

## Program and Webpage Compatibility
::: details Error running on HarmonyOS NEXT system: API version too high
The HarmonyOS applications provided by Vilinko Studio are compatible with HarmonyOS 6 and above, API ≥ 20. If your system is not upgraded to the relevant version, you may not be able to use our products. We recommend that you install and run the program on a device with system version 6.0.0.130 and above.

If you choose to compile and install using the .hap package, please try changing the `compatibleSdkVersion` value in the `build-profile.json5` file.
:::

## Program installation related
::: details Windows SmartScreen displays an unknown program or that the program may contain a virus
Vilinko Studio is committed to providing users with safe and reliable services. Our application has undergone a comprehensive scan by the third-party security detection platform [VirScan](https://www.virscan.org) and [VirusTotal](https://www.virustotal.com/gui/), and the results show no viruses or any suspicious file behaviors. Given the current financial constraints, Vilinko Studio has not yet equipped itself with a code signing certificate. We sincerely apologize for any inconvenience this may cause. We will continue to enhance our security compliance capabilities and, once conditions permit, promptly improve the relevant certification system to provide users with more comprehensive trust assurance.

[Click here to help us improve our compliance capabilities](https://afdian.com/a/EnderMo)
:::