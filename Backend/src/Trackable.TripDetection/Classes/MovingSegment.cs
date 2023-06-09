// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

using System;
using System.Collections.Generic;
using Trackable.Models;

namespace Trackable.TripDetection.Helpers
{
    [Serializable]
    internal class MovingSegment : TripSegmentBase
    {
        public MovingSegment()
        {
        }

        public MovingSegment(IList<TrackingPoint> points)
            :base(points)
        {
        }

        public override bool IsMovingSegment
        {
            get
            {
                return true;
            }
        }
    }
}
