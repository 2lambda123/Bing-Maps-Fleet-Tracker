// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

using Trackable.EntityFramework;
using Trackable.Models;
using AutoMapper;
using System.Linq.Expressions;
using System;

namespace Trackable.Repositories
{
    /// <summary>
    /// Responsible for handling the trip leg repository.
    /// </summary>
    public interface ITripLegRepository : IRepository<int, TripLeg>
    {
    }

    internal class TripLegRepository : DbRepositoryBase<int, TripLegData, TripLeg>, ITripLegRepository
    {
        public TripLegRepository(
            TrackableDbContext db,
            IMapper mapper)
            : base(db, mapper)
        {
        }

        protected override Expression<Func<TripLegData, object>>[] Includes => null;
    }
}
