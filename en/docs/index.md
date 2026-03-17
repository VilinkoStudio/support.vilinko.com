---
prev: false
next: false
---

# Frequently Asked Questions

## Missing DLL file
::: details The program cannot start because MSVCP140.dll is missing from your computer.
This issue is usually caused by the lack of the **Microsoft Visual C++ Redistributable** component. We have provided two solutions for you. If these do not resolve your issue, please try seeking help in the Microsoft community.

### Method 1: Install the Latest Microsoft Visual C++ Redistributable
**<u>MSVCP140.dll is a component of Visual C++ Redistributable for Visual Studio 2015-2022, and installing this component can fundamentally solve the problem.</u>**

1. Visit the [Microsoft Visual C++ Redistributable for Visual Studio 2015-2022](https://learn.microsoft.com/zh-cn/cpp/windows/latest-supported-vc-redist?view=msvc-170) page.
2. Choose the appropriate version based on your system architecture (32-bit or 64-bit) and download it. For 64-bit operating systems, select vc_redist.x64.exe; for 32-bit operating systems, select vc_redist.x86.exe.
3. After the download is complete, double-click to run the installer.
4. In the User Account Control dialog box, click "Yes" to grant permission.
5. Check "I agree to the terms and conditions" and click "Install"
6. Wait for the installation to complete, then restart the computer.

### Method 2: Perform a system file integrity check
If the problem persists after installing the component, you can use the system's built-in tools to check and repair system files:

1. Press the `Win + R` key combination to open the "Run" dialog box, enter the following command, and then press Enter:
```cmd
sfc /scannow
```
2. The system will begin scanning and repairing damaged system files. Please wait for the process to complete.
3. After scanning is complete, restart the computer.

### FAQ
- If prompted "A higher version is already installed," select the "Repair" option instead of uninstalling.
- If the installation fails, make sure your Windows system is up to date.
- If the problem persists, it is recommended to seek further support from the Microsoft website.
:::

::: details 0xc000007b error (cannot find msvcp140.dll, etc.)
Download and install: [https://aka.ms/vs/16/release/vc_redist.x64.exe](https://aka.ms/vs/16/release/vc_redist.x64.exe)
:::