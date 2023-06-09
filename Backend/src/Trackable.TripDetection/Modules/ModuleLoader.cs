// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

using System;
using System.Threading.Tasks;
using Trackable.Common;

namespace Trackable.TripDetection.Modules
{
    internal class ModuleLoader<T> : AsyncLazy<IModule>, IModuleLoader where T : IModule
    {
        public ModuleLoader(Func<Task<IModule>> taskFactory)
            : base(taskFactory)
        {
        }

        public ModuleLoader(Func<IModule> taskFactory)
            : base(taskFactory)
        {
        }

        public Task<IModule> LoadModule()
        {
            return this.Value;
        }

        public Type ModuleType()
        {
            return typeof(T);
        }
    }
}
