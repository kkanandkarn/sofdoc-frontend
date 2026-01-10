export const vaultDetailsPath = [
  { label: "Vault", route: "/vault" },
  { label: "Vault Details" },
];

export const STORAGE_TYPE_OPTIONS = [
  { label: "UNLIMITED", value: "UNLIMITED" },
  { label: "LIMITED", value: "LIMITED" },
];
export const projectInfoOptions = [
  { label: "Project Info", value: "PROJECT_INFO" },
  { label: "Project Environments", value: "PROJECT_ENVIRONMENTS" },
];

// Temp

export const vaultProjects = [
  {
    id: 1,
    vaultName: "SofDoc",
    storageUsed: "0.8",
    totalStorage: "1",
    collaborators: "4",
    fileCount: "154",
    status: "ACTIVE",
  },
  {
    id: 2,
    vaultName: "Xley-Whitelist",
    storageUsed: "0.4",
    totalStorage: "1",
    collaborators: "2",
    fileCount: "32",
    status: "ACTIVE",
  },
];

export const vaultFileDetails = {
  vaultData: {
    id: 1,
    name: "Xley",
    storageUsed: "0.8",
    totalStorage: "1",
    collaborators: "4",
    fileCount: "154",
  },
  files: {
    1: [
      {
        id: 1,
        originalFileName: "dashboard-banner.png",
        fileName: "d953fc19-ee92-413b-929f-2445999a3f2f.png",
        fileType: "Image",
        mimeType: "image/png",
        extension: ".png",
        sizeInMb: "0.5",
        sizeInBytes: 524288,

        fileUrl:
          "https://sofdoc.com/cdn/d953fc19-ee92-413b-929f-2445999a3f2f.png",

        originalFileUrl:
          "https://res.cloudinary.com/sofdoc/image/upload/v1736039130/vault/d953fc19-ee92-413b-929f-2445999a3f2f.png",

        uploadedBy: {
          userId: 101,
          name: "Anand Kumar Karn",
          role: "Admin",
        },
        uploadedAt: "2025-01-05T10:15:30Z",
        lastModifiedAt: "2025-01-06T08:20:10Z",
        checksum: "c2f3a8d9b6e8f23c4a9d1b7f8e92d123",
        isShared: true,
        isStarred: false,
        status: "ACTIVE",
      },
      {
        id: 2,
        originalFileName: "Project-Specification-v2.pdf",
        fileName: "9a81c4e2-0f34-4b8a-9c76-1d7bfe88a901.pdf",
        fileType: "PDF",
        mimeType: "application/pdf",
        extension: ".pdf",
        sizeInMb: "1.8",
        sizeInBytes: 1887437,

        fileUrl:
          "https://sofdoc.com/cdn/9a81c4e2-0f34-4b8a-9c76-1d7bfe88a901.pdf",

        originalFileUrl:
          "https://sofdoc-files.sgp1.digitaloceanspaces.com/vault/9a81c4e2-0f34-4b8a-9c76-1d7bfe88a901.pdf",

        uploadedBy: {
          userId: 102,
          name: "Rahul Sharma",
          role: "Editor",
        },
        uploadedAt: "2025-01-02T14:42:00Z",
        lastModifiedAt: "2025-01-02T14:42:00Z",
        checksum: "a7d91f33e4b2c9f0d98e11c7aa56c789",
        isShared: false,
        isStarred: true,
        status: "ACTIVE",
      },
      {
        id: 3,
        originalFileName: "Financial-Data-2024.xlsx",
        fileName: "4c3a2e91-7f12-4d6c-8c21-b0a92d4f77aa.xlsx",
        fileType: "Spreadsheet",
        mimeType:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        extension: ".xlsx",
        sizeInMb: "3.2",
        sizeInBytes: 3355443,

        fileUrl:
          "https://sofdoc.com/cdn/4c3a2e91-7f12-4d6c-8c21-b0a92d4f77aa.xlsx",

        originalFileUrl:
          "https://sofdoc-prod.s3.ap-south-1.amazonaws.com/vault/4c3a2e91-7f12-4d6c-8c21-b0a92d4f77aa.xlsx",

        uploadedBy: {
          userId: 103,
          name: "Neha Verma",
          role: "Viewer",
        },
        uploadedAt: "2024-12-28T09:10:45Z",
        lastModifiedAt: "2025-01-03T11:05:12Z",
        checksum: "f1e3d4c5b6a7980123de45f6789abcde",
        isShared: true,
        isStarred: false,
        status: "ARCHIVED",
      },
    ],
  },
};

export const vaultEnvironmentOptions = [
  {
    value: 1,
    label: "Production",
  },
  {
    value: 2,
    label: "Staging",
  },
  {
    value: 3,
    label: "Development",
  },
];

export const vaultCollaborators = {
  vaultData: {
    id: 1,
    name: "Xley",
    storageUsed: "0.8",
    totalStorage: "1",
    collaborators: "6",
    fileCount: "154",
  },
  collaborators: {
    1: [
      {
        id: 1,
        name: "Production Server",
        email: "prod@xley.com",
        role: "SYSTEM",
        storageAllocation: "UNLIMITED",
        storageUsed: "0.8",
        totalStorage: "unlimited",
        fileCount: "154",
        status: "ACTIVE",
        lastAccessed: "2026-01-07T18:45:00Z",
        createdAt: "2025-06-12T10:00:00Z",
        isOwner: true,
      },
    ],
    2: [
      {
        id: 2,
        name: "Staging Server",
        email: "staging@xley.com",
        role: "SYSTEM",
        storageAllocation: "LIMITED",
        storageUsed: "0.5",
        totalStorage: "1",
        fileCount: "15",
        status: "ACTIVE",
        lastAccessed: "2026-01-06T14:20:00Z",
        createdAt: "2025-07-01T09:30:00Z",
        isOwner: true,
      },
    ],
    3: [
      {
        id: 3,
        name: "Anand Kumar Karn",
        email: "anandsofzenix@gmail.com",
        role: "ADMIN",
        storageAllocation: "LIMITED",
        storageUsed: "0.1",
        totalStorage: "0.5",
        fileCount: "26",
        status: "ACTIVE",
        lastAccessed: "2026-01-08T08:10:00Z",
        createdAt: "2025-08-15T11:45:00Z",
        isOwner: false,
      },
      {
        id: 4,
        name: "Guru Sharan Kumar Ram",
        email: "gurushrarankumarram1@gmail.com",
        role: "EDITOR",
        storageAllocation: "LIMITED",
        storageUsed: "0.05",
        totalStorage: "0.3",
        fileCount: "12",
        status: "ACTIVE",
        lastAccessed: "2026-01-07T16:40:00Z",
        createdAt: "2025-09-02T10:15:00Z",
        isOwner: false,
      },
      {
        id: 5,
        name: "Neha Verma",
        email: "neha.verma@xley.com",
        role: "VIEWER",
        storageAllocation: "UNLIMITED",
        storageUsed: "0.02",
        totalStorage: "0.2",
        fileCount: "6",
        status: "INACTIVE",
        lastAccessed: "2025-12-28T12:00:00Z",
        createdAt: "2025-10-10T09:00:00Z",
        isOwner: false,
      },
    ],
  },
};
